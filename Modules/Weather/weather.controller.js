(function(){
    'use strict';
    var weatherController = function(WeatherSvc) {
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
            WeatherSvc.GetForecast(ctrl.searchCity)
                .then(
                function success(result){
                    var forecastData = result.list.map(function(item){
                        return {
                            date: new Date(moment.unix(item.dt)),
                            temp: item.main.temp
                        };
                    });
                    ctrl.forecast = forecastData;
                },
                function error(err){
                    console.log(err.message);
                });
        };

        return ctrl;

    };

    angular.module('weatherApp')
        .controller('WeatherCtrl', ['WeatherSvc', weatherController]);
}());
