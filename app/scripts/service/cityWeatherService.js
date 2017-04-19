var app = angular.module('weatherAppFinApp', []);
app.factory('weatherService', ['$http', '$q', function($http, $q) {
 var getWeather = function(city){
  console.log(city);
    return $http.get('http://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID=ff924cc48a14cc63723ccaff0bf6b850')
      .then(function(response){
        console.log('response', response);
        return response.data[teamId];
      })
  };
}]);
  