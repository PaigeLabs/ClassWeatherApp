(function(){
    'use strict';

    var weatherService = function($http) {
        var getCurrentWeather = function getCurrentWeather(searchCity) {
                return $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + searchCity + '&units=imperial');
            },
            getForecast = function getForecast(searchCity){
                return $http.get('http://api.openweathermap.org/data/2.5/forecast?q=' + searchCity + '&units=imperial')
                    .then(function(result){
                        return result.data;
                    });
            };
        return {
            GetCurrentWeather: getCurrentWeather,
            GetForecast: getForecast
        };
    };

    angular.module('weatherApp')
        .factory('WeatherSvc', ['$http', weatherService]);
}());

