'use strict';

/**
 * @ngdoc function
 * @name weatherAppFinApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the weatherAppFinApp
 */
angular.module('weatherAppFinApp')
  .controller('MainCtrl', ['$scope', '$http','$q',function ($scope, $http, $q) {
       $scope.getCityWeather = function(city){
          return  $http.get('http://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID=ff924cc48a14cc63723ccaff0bf6b850')
                    .then(function(response) {
                      console.log(response.data);
                       $scope.data = response.data;
                    }, function(error) {
                        return error;
                    });
         };



        //     weatherService.getWeather(city)
        //         .then(function(data) {
        //           console.log(data);
        //         }, function(error) {
        //             console.log(error);
        //         });
        // };
  //   $scope.getCityWeather = function(city){
  //     $http({
  //     method: 'GET',
  //     url: 'http://api.openweathermap.org/data/2.5/forecast/daily?mode=json&units=metric&cnt=7&callback=JSON_CALLBACK&q='+city+'&APPID=ff924cc48a14cc63723ccaff0bf6b850'
  //   }).then(function successCallback(response) {
  //       $scope.weatherReport = response;
  //       console.log($scope.weatherReport);
  //     }, function errorCallback(response) {
  //       console.log(response);
  //   });
  // };
  }]);
