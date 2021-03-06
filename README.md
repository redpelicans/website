Website of redpelicans
======================
Website of redpelicans: [redpelicans.com](redpelicans.com)

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

Launch server (express):
```bash
NODE_ENV=production DEBUG=main:* PORT=3004 node server
```

Snapshots
===
In **production**, snapshots are generated if they not already exist for search engine optimization.  
It relies on [escaped_fragment](https://developers.google.com/webmasters/ajax-crawling/docs/specification).  

Requirement
===
[git](http://git-scm.com/) and [nodejs](http://nodejs.org/)

_[npm](https://www.npmjs.org/) is the package manager of grunt modules and is bundled in nodejs_  
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

    # cd website
    # docker build --no-cache -t redpelicans/website .
    # docker push redpelicans/website
    # docker rm -f website
    # docker rm -f proxy
    # docker run -d --restart=always --name website -h website redpelicans/website
    # cd /opt/proxy
    # docker run -d --restart=always --link website:website --link ghost:ghost --name proxy -p 80:80 -v "/opt/proxy":/opt -w /opt node sh run
