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
  .module('weatherAppFinApp',['ngRoute','ngTagsInput']).config(function ($routeProvider,$locationProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });

      $locationProvider.html5Mode(true);
  });
