(function () {

    angular.module("rebrews").directive("recipeColorDisplay", function () {
        return {
            restrict: 'E',
            scope: {},
            bindToController: {
				rgbValue: "@"
            },
            // view
            templateUrl: '/app/recipe/recipe.color.display/recipe.color.display.template.html',
            // controller
            controller: "recipeColorDisplayController as ctrl"
        }
    })

    .controller("recipeColorDisplayController", recipeColorDisplayController);

    recipeColorDisplayController.$inject = ["$scope", "$stateParams"];

    function recipeColorDisplayController($scope, $stateParams) {
        var self = this;

        self.glasses = [
            "beerglass-tulip",
            "beerglass-weizen",
            "beerglass-boot",
            "beerglass-snifter",
            "beerglass-goblet",
            "beerglass-pint",
            "beerglass-flute",
            "beerglass-mug",
            "beerglass-pilsner",
            "beerglass-nonic",
            "beerglass-chalice"
        ];

        self.classModifier = "-outline";

        self.selectNewGlass = function () {
            self.presentClass = Math.floor((Math.random() * self.glasses.length - 1) + 1);
        };

        $scope.$watch(function () {
            return self.rgbValue;
        }, function () {
            if (self.rgbValue)
                self.classModifier = "";
            else
                self.classModifier = "-outline";
        });

        function initialize() {
            self.presentClass = Math.floor((Math.random() * self.glasses.length - 1) + 1);
        }

        //Call initialization function
        initialize();
    }
})();
