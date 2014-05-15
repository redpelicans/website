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
    .when('/', { templateUrl: 'views/main.html' })
    .otherwise({ redirectTo: '/' });

  $locationProvider.html5Mode(true);

  $translateProvider
    .useStaticFilesLoader({ prefix: 'i18n/', suffix: '.json' })
    .preferredLanguage('en') // avoid FOUC
    .fallbackLanguage('en')
    .useCookieStorage();
});
