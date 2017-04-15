'use strict';
var app = angular.module('weatherAppFinApp', []);
  app.factory('weatherService', function ($http, $q) {
        return {
            getWeather: function(city) {
                return  $http.get('http://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID=ff924cc48a14cc63723ccaff0bf6b850')
                    .then(function(response) {
                      console.log(response.data);
                       $scope.data = response.data;
                    }, function(error) {
                        return error;
                    });
            }
        };
    });