(function(){
    'use strict';

    var config = function($routeProvider){
        $routeProvider
            .when('/',{
                templateUrl: 'modules/weather/main.view.html'
            })
            .when('/forecast/:cityId/:date', {
                templateUrl: 'modules/weather/forecast.view.html'
            })
            .otherwise({redirectTo:'/'});
    };

    angular.module('weatherApp', ['ngRoute'])
        .config(['$routeProvider', config]);
}());

