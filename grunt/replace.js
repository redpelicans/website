'use strict';

module.exports = {
  ghpages: {
    files: {
      'index.html': 'index.html'
    }
  , options: {
      patterns: [
        { match: /<!-- ghpages:css -->\s*(\r\n|\r|\n)\s*<link rel="stylesheet" href="(.*)"\s*\/>\s*(\r\n|\r|\n)\s*<!-- endghpages -->/g
        , replacement: function(m, l1, path, l2) { return "<link rel='stylesheet' href='"+'dist/'+path+"'/>"; }
        }
      , { match: /<!-- ghpages:js -->\s*(\r\n|\r|\n)\s*<script src="(.*)"><\/script>\s*(\r\n|\r|\n)\s*<!-- endghpages -->/g
        , replacement: function(m, l1, path, l2) { return "<script src='"+'dist/'+path+"'></script>"; }
        }
      ]
    }
  }
};
