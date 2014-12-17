var express = require('express')
  , app = express()
  , port = process.env.PORT || 3004;

app.use(express.static(__dirname + '/src'));

app.listen(port, function() {
  console.log('Listening on port: %d', port);
});
