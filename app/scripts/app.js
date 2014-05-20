'use strict';

var app = angular.module(
  'rpApp'
, [ 'ngCookies', 'ngRoute'
  , 'pascalprecht.translate'
  , 'rpApp.controllers'
  , 'rpApp.directives'
  ]
);

app.config(function($routeProvider, $locationProvider, $translateProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html'
    })
    .when('/services/:state', {
      templateUrl: 'views/services.html'
    , controller: 'ServicesCtrl'
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
