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

        self.leftOffset = "50%";

        $timeout(function () {
            self.leftOffset = self.leftOffsetCalc().toFixed(2) + "%";
        }, 1000);

        self.leftOffsetCalc = function() {
            var top = self.actual - self.min;
            var bottom = self.max - self.min;

            return Math.max(Math.min(((top / bottom) * 70) + 15, 100), 0);
        }

        console.log("TargettedSlider is alive");

    }]);
})();