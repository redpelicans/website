Website of redpelicans
======================
Website of redpelicans: [http://redpelicans.github.io/](http://redpelicans.github.io/)

Usage
===
You may need to install/update modules:
```bash
npm install
bower install
```

Build with grunt for dev or dist:
```bash
grunt dev
grunt dist
```

Launch server (express)
```bash
node server.js
NODE_ENV=production PORT=5000 node server.js
```

Snapshots
===
In *production*, snapshots are generated of they not already exists for search engine optimization.  
It relies on [escaped_fragment](https://developers.google.com/webmasters/ajax-crawling/docs/specification).  

Requirement
===
[git](http://git-scm.com/) and [nodejs](http://nodejs.org/)

_[npm](https://www.npmjs.org/) is the package manager of grunt modules_  
_[grunt-cli](https://github.com/gruntjs/grunt-cli) is the [grunt](http://gruntjs.com/)'s command line interface_  
_[bower](http://bower.io/) is the package manager of the client-side application_

Installation
===
```bash
npm install -g grunt-cli bower
```


Docker
===

Create an image, push it and run it:

    # docker build -t redpelicans/website .
    # docker push redpelicans/website
    # docker run -d --restart=always --name website -h website  redpelicans/website


