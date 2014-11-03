/*********************************************************************
    This file contains the declaration and definition of modules.
**********************************************************************/

'use strict';

//Module for articalTagApp
var articalTagApp = angular.module('articalTagApp', ['$strap.directives']);

//Main module - one module to rule them all, one module to bind them
var app = angular.module('articalApp', ['ui.bootstrap',  'articalTagApp']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/', {
           templateUrl: '/partials/artical-app.html',
           controller: 'articalAppCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);

app.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push('httpRequestInterceptorCacheBuster');
}]);

app.config(['$compileProvider', function ($compileProvider) {
    $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|data):/);
}]);

app.factory('httpRequestInterceptorCacheBuster', ['$q', function ($q) {
    return {
        request: function (request) {
            if (request) {
                if (request.method === "GET" && request.url.indexOf('.html') === -1) {
                    var sep = request.url.indexOf('?') === -1 ? '?' : '&';
                    request.url = request.url + sep + 'cacheSlayer=' + new Date().getTime();
                }
            }

            return request || $q.when(request);
        }
    };
}]);