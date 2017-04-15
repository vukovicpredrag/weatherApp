'use strict';

/**
 * @ngdoc function
 * @name weatherAppFinApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the weatherAppFinApp
 */
angular.module('weatherAppFinApp')
  .controller('MainCtrl', ['$scope', '$http',function ($scope, $http) {
$scope.tags = [];
$scope.getCityWeather = function(tags){
        angular.forEach($scope.tags, function(value, key) {
         $scope.data =  $http.get('http://api.openweathermap.org/data/2.5/weather?q='+value.text+'&APPID=ff924cc48a14cc63723ccaff0bf6b850')
                    .then(function(response) {
                       $scope.data = response.data;
                    }, function(error) {
                        return error;
                    });
              });
         };
  }]);
