'use strict';

/**
 * @ngdoc overview
 * @name weatherAppFinApp
 * @description
 * # weatherAppFinApp
 *
 * Main module of the application.
 */
angular
  .module('weatherAppFinApp',['ngRoute']).config(function ($routeProvider,$locationProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });

      $locationProvider.html5Mode(true);
  });
