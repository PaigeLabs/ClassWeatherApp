(function(){
    'use strict';

    var config = function($routeProvider){
        $routeProvider
            .when('/',{
                templateUrl: 'modules/weather/main.view.html'
            })
            .otherwise({redirectTo:'/'});
    };

    angular.module('weatherApp', ['ngRoute'])
        .config(['$routeProvider', config]);
}());

