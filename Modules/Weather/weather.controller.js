(function(){
    'use strict';

    var weatherController = function($routeParams, WeatherSvc) {
        var ctrl = this;

        ctrl.message = 'Assurant';
        ctrl.searchCity;
        ctrl.getCurrentWeather = function getCurrentWeather() {
            WeatherSvc.GetCurrentWeather(ctrl.searchCity)
                .then(
                function success(result) {
                    ctrl.weather = result.data;
                },
                function error(err) {
                    console.log(err.message);
                });
        };

        ctrl.getForecast = function getForecast(){
            var cityId = $routeParams.cityId;
            WeatherSvc.GetForecast(cityId)
                .then(function success(result){
                    ctrl.forecast = result.list;
                },
                function error(err){
                    console.log(err.message);
                });
        };

        return ctrl;
    };

    angular.module('weatherApp')
        .controller('WeatherCtrl', ['$routeParams', 'WeatherSvc', weatherController]);
}());
