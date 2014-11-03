/**************************************************************
    This file contains all the services used by the
    application.

    Module: articalApp
***************************************************************/

'use strict';

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

