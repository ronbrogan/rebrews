﻿(function () {

    angular.module("rebrews").directive("loadingBar", ["$timeout", function($timeout) {
        return {
            restrict: 'A',
            scope: false,
            // controller
            link: function(scope, element, attr) {
                
                var auto = true;
                var incTimeout;
                var status = 0;

                element.prepend('<div class="loading-bar"></div>');
                var loadingBar = element.children(".loading-bar").eq(0);

                scope.$on("loadingBar-start", function (e) {
                    e.defaultPrevented = true;
                    e.stopPropagation();
                    loadingBar.css("display", "block");
                    auto = true;
                    set(.05);
                });

                scope.$on("loadingBar-set", function (e, val) {
                    e.defaultPrevented = true;
                    e.stopPropagation();
                    loadingBar.css("display", "block");
                    auto = false;
                    set(val);
                });

                scope.$on("loadingBar-increment", function (e, val) {
                    e.defaultPrevented = true;
                    e.stopPropagation();
                    loadingBar.css("display", "block");
                    auto = false;
                    set(status + val);
                });

                scope.$on("loadingBar-complete", function (e) {
                    e.defaultPrevented = true;
                    e.stopPropagation();
                    auto = false;
                    set(1);
                });


                function set(n) {
                    status = n;
                    $timeout.cancel(incTimeout);
                    if (n >= 1) {
                        auto = false;
                        loadingBar.css('width', "100%");
                        incTimeout = $timeout(function() {
                            loadingBar.css("display", "none");
                            loadingBar.css('width', 0);
                            status = 0;
                        }, 250);
                    } else {
                        var pct = (n * 100) + '%';
                        loadingBar.css('width', pct);
                    }

                    if (!auto)
                        return;

                    incTimeout = $timeout(function() {
                        set(getIncVal());
                    }, 250);
                }

                function getIncVal() {
                    var curr = status;
                    var increment = Math.random() * (1 / ((10 * curr) + 10));

                    var result = curr + increment;

                    return  ( result >= .98 ? .98 : result);
                }

            }
        }
    }]);
})();
