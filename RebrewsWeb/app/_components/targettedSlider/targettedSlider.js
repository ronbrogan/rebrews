(function () {
    var app = angular.module("rebrews");

    app.component("targettedSlider", {
        bindings: {
            min: "<",
            max: "<",
            actual: "<",
            expanded: "<",
            outputFormatter: "&"
        },
        templateUrl: "/app/_components/targettedSlider/targettedSlider.html",
        controller: "targettedSliderController as slider"
    });

    app.controller("targettedSliderController", ["$timeout", function ($timeout) {
        var self = this;

    }]);

    app.filter("sliderOffset", function () {
        return function (input, min, max, appendPercent) {
            var value = Math.max(Math.min((((input - min) / (max - min)) * 70) + 15, 100), 0);
            if(appendPercent) {
                return value + "%";
            }
            return value;
        }
    });
})();