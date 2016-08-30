(function () {
    var app = angular.module("Rebrews");
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
            self.expanded = self.expanded || false;
        }]);
    app.filter("sliderOffset", function () {
        return function (input, min, max, appendPercent) {
            input = parseFloat(input).toFixed(3);
            var value = (((input - min) / (max - min)) * 70) + 15;
            value = Math.max(Math.min(value, 100), 0);
            if (appendPercent) {
                return value + "%";
            }
            return value.toString();
        };
    });
})();
//# sourceMappingURL=targettedSlider.js.map