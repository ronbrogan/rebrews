(function () {
    "use strict";

    angular.module("rebrews").service("rttService", rttService);

    function rttService() {
        var service = this;

        service.requests = {};
        service.resolved = [];

        service.offload = function (arr) {
            
        };

        service.addRequest = function(hash) {
            service.requests[hash] = new Date().getTime();
        };

        service.resolveRequest = function(config) {
            var end = new Date().getTime();
            var begin = service.requests[config.hash];
            delete service.requests[config.hash];

            var duration = end - begin;
            service.resolved.push({ 'RTT': duration, 'URL': config.url });

            if (service.resolved.length >= 2) {
                //offload resolved to server and clear
                service.offload(angular.copy(service.resolved));
                service.resolved = [];
            }

        };

        service.request = function (config) {
            config.hash = hashString(config.url + new Date().getTime());
            service.addRequest(config.hash);
            return config;
        };

        service.response = function(response) {
            service.resolveRequest(response.config);
            return response;
        };
        return service;
    }

    function hashString(str) {
        var hash = 0, i, chr, len;
        if (str.length == 0) return hash;
        for (i = 0, len = str.length; i < len; i++) {;
            chr = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + chr;
            hash |= 0; // Convert to 32bit integer
        }
        return hash;
    }
})();