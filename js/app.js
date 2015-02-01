var imports = [
  'hackApp.controllers',
  'chart.js',
  'ui.router',
  'ui'
];

var app = angular.module('hackApp', imports);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
  function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

    $urlRouterProvider.otherwise('404');

    $stateProvider
      .state('index', {
        url: '/',
        controller: 'IndexController',
        templateUrl: '/templates/pages/home.html'
      })
      .state('404', {
        url: '/404',
        templateUrl: '/templates/pages/404.html'
      });
  }]);