'use strict';

var app = angular.module(
  'rpApp'
, [ 'ngCookies'
  , 'ngRoute'
  , 'ngAnimate'
  , 'pascalprecht.translate'
  , 'duScroll'
  , 'headroom'
  , 'nvd3ChartDirectives'
  , 'rpApp.services'
  , 'rpApp.controllers'
  , 'rpApp.directives'
  ]
);

app.config(function($routeProvider, $locationProvider, $translateProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html'
    , controller: 'HomeCtrl'
    })
    .when('/services/:id?', {
      templateUrl: 'views/services.html'
    , controller: 'ServicesCtrl'
    })
    .when('/logo', {
      templateUrl: 'views/logo.html'
    , controller: 'LogoCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });

  // $locationProvider.html5Mode(true);

  $translateProvider
    .useStaticFilesLoader({ prefix: 'i18n/', suffix: '.json' })
    .preferredLanguage('en') // avoid FOUC
    .fallbackLanguage('en')
    .useCookieStorage();
});

app.value('duScrollEasing', function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 });
