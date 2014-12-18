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
    .when('/technologies/:id?', {
      templateUrl: 'views/technologies.html'
    , controller: 'TechnologiesCtrl'
    })
    .when('/logo', {
      templateUrl: 'views/logo.html'
    , controller: 'LogoCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });

  $locationProvider.hashPrefix('!');

  $translateProvider
    .useStaticFilesLoader({ prefix: 'i18n/', suffix: '.json' })
    .preferredLanguage('en') // avoid FOUC
    .fallbackLanguage('en')
    .useCookieStorage();
});

app.value('duScrollEasing', function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 });

app.constant('moment', moment);

app.run(function($rootScope, $location) {
  var _getTopScope = function() { return $rootScope; };

  $rootScope.ready = function() {
    var $scope = _getTopScope();
    $scope.status = 'ready';
    if (!$scope.$$phase) $scope.$apply();
  };

  $rootScope.loading = function() {
    var $scope = _getTopScope();
    $scope.status = 'loading';
    if (!$scope.$$phase) $scope.$apply();
  };

  $rootScope.$on('$routeChangeStart', function() { _getTopScope().loading(); });
  $rootScope.$on('duScrollspy:becameActive', function($event, $element) { /* todo */ });
});
