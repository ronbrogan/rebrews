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
			            thisCtrl.confirm();
			        });
			    });

			}
        }
    })

    .controller("cellEditorController", cellEditorController);

    cellEditorController.$inject = ["$scope", "$stateParams", "$filter"];

    function cellEditorController($scope, $stateParams, $filter) {
        var self = this;

        self.confirm = function () {
            if (self.isEditing) {
                self.isEditing = false;
                console.log(self.itemValue);
            }
        }

        function initialize() {
            if (self.columnDefinition.type == "selector") {
                self.itemValue = $filter('descenderFilter')(self.item[self.columnDefinition.binding]);
            }
            else{
                self.itemValue = $filter('descenderFilter')(self.item[self.columnDefinition.binding], self.columnDefinition.property);
            }

        }

        //Call initialization function
        initialize();
    }
})();
