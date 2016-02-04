(function () {

    angular.module("rebrews").directive("cellEditor", function () {
        return {
            restrict: 'E',
            bindToController: {
                item: "=",
                columnDefinition: "=",
                selectorItems: "="
            },
            scope: {},
            // view
            templateUrl: '/app/_directives/cell-editor/cell-editor.template.html',
            // controller
            controller: "cellEditorController as ctrl",
			link: function(scope, element, attr, thisCtrl){
			    element.on("dblclick", function () {
			        scope.$apply(function () {
                        if(thisCtrl.columnDefinition.isEditable)
			                thisCtrl.isEditing = true;
			        });
			    });

			    $(document).bind("click", function (event) {
			        var isChild = element
                        .find(event.target)
                        .length > 0;

			        if (isChild)
			            return;

			        scope.$apply(function () {
			            thisCtrl.isEditing = false;
			        });
			    });

			}
        }
    })

    .controller("cellEditorController", cellEditorController);

    cellEditorController.$inject = ["$scope", "$stateParams"];

    function cellEditorController($scope, $stateParams) {
        var self = this;


        function initialize() {

        }

        //Call initialization function
        initialize();
    }
})();
