var express = require('express')
  , app = express()
  , phantom = require('phantom')
  , fs = require('fs')
  , async = require('async')
  , minimist = require('minimist');
  , argv = minimist(process.argv.slice(2))
  , port = argv.port || 3004
  , env = argv.env || 'dev';


var escapedFragment = function(snapshotsDir) {
  return function(req, res, next) {
    var fragment = req.query._escaped_fragment_;
    if (!fragment) return next();

    if (fragment === '' || fragment === '/') fragment = '/home.html';
    if (fragment.charAt(0) !== '/') fragment = '/' + fragment;
    if (fragment.indexOf('.html') == -1) fragment += '.html';

    var snapshotPath = snapshotsDir + fragment;
    if (!fs.existsSync(snapshotPath)) {
      generateSnapshot(req.protocol + '://' + req.get('Host') + req.originalUrl, snapshotPath, function(err) {
        if (err) res.sendStatus(404);
        res.sendFile(snapshotPath);
      });
    } else {
      try { res.sendFile(snapshotPath); }
      catch (err) { res.send(404); }
    }
  };
};

var generateSnapshot = function(url, snapshotPath, cb) {
  if (!url || !url.length) return;
  url = url.replace('?_escaped_fragment_=', '#!');

  console.log('Snapshoting ' + url);
  phantom.create(function (ph) {
    ph.createPage(function (page) {
      page.open(url, function (status) {
        if (status != 'success') return cb(new Error('Unable to open ' + url));
        async.retry(3, getHTML, function(err, html) {
          if (err) return cb(new Error('Unable to get html of page at ' + url));
          fs.writeFile(snapshotPath, html, function(err) {
            if (err) return cb(err);
            ph.exit();
            console.log('Snapshot of ' + url + ' done');
            cb();
          })
        });

        function getHTML(cb, result) {
          page.evaluate(function () {
            return document.getElementsByTagName('body')[0].getAttribute('data-status') == 'ready'
              ? document.getElementsByTagName('html')[0].outerHTML
              : false;
          }, function(result) {
            if (result === false) {
              // add a delay to make tries more relevant
              return cb(new Error('Page not ready'));
            }
            cb(null, result);
          });
        }
      });
    });
  });
};

app.use(escapedFragment(__dirname + '/snapshots'));
app.use(express.static(__dirname + '/src'));
app.use(function(req, res, next) { res.sendFile(__dirname + '/sitemap.xml') });

app.listen(port, function() { console.log('Listening on port: %d', port); });
