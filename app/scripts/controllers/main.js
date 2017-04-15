'use strict';

/**
 * @ngdoc function
 * @name weatherAppFinApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the weatherAppFinApp
 */
angular.module('weatherAppFinApp')
  .controller('MainCtrl', function ($http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

$http({
  method: 'GET',
  headers: {
        'Content-Type':'application/json'
      },
  url: 'http://api.openweathermap.org/data/2.5/forecast/daily?mode=json&units=metric&cnt=7&callback=JSON_CALLBACK&q=novisad&APPID=ff924cc48a14cc63723ccaff0bf6b850'
}).then(function successCallback(response) {
    console.log(response);
  }, function errorCallback(response) {
    console.log(response);
  });


  });
