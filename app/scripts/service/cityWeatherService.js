'use strict';
var app = angular.module('weatherAppFinApp', []);
  app.factory('weatherService', function ($http, $q) {
        return {
            getWeather: function(city) {
                return $http.get('http://api.openweathermap.org/data/2.5/forecast/daily?mode=json&units=metric&cnt=7&callback=JSON_CALLBACK&q='+city+'&APPID=ff924cc48a14cc63723ccaff0bf6b850')
                    .then(function(response) {
                        if (typeof response.data === 'object') {
                            return response.data;
                        } else {
                            return $q.reject(response.data);
                        }

                    }, function(response) {
                        return $q.reject(response.data);
                    });
            }
        };
    });