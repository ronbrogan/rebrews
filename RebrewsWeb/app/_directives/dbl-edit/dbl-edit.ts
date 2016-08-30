(function () {

    angular.module("Rebrews").directive("dblEdit", function() {
        return {
            restrict: "A",
            scope: {
                displayValue: "=",
                appendValue: "="
            },
            // view
            templateUrl: "/app/_directives/dbl-edit/dbl-edit.template.html",
            // controller
            controller: "dblEditController as dblCtrl",
            link: function(scope: any, element, attr, thisCtrl: any) {
                thisCtrl.displayValue = scope.displayValue;
                thisCtrl.appendValue = scope.appendValue;

                element.on("dblclick", function () {
                    scope.$apply(function() {
                        thisCtrl.isEditing = true;
                    });
                });

                $(document).bind("click", function (event) {
                    var isChild = element
                        .find(event.target)
                        .length > 0;

                    if (isChild)
                        return;

                    scope.$apply(function() {
                        thisCtrl.isEditing = false;
                    });
                });



            }
        }
    })

    .controller("dblEditController", dblEditController);

    dblEditController.$inject = ["$scope", "$stateParams"];

    function dblEditController($scope, $stateParams) {
        var self = this;
        self.isEditing = false;

        function initialize() {

        }

        //Call initialization function
        initialize();
    }
})();
