(function(){
    'use strict';

    var config = function($routeProvider, $httpProvider){
        $routeProvider
            .when('/',{
                templateUrl: 'modules/weather/main.view.html'
            })
            .when('/forecast/:cityId/:date', {
                templateUrl: 'modules/weather/forecast.view.html'
            })
            .otherwise({redirectTo:'/'});

        $httpProvider.interceptors.push('httpInterceptor');
    };

    angular.module('weatherApp', ['ngRoute'])
        .config(['$routeProvider', '$httpProvider', config]);
}());

