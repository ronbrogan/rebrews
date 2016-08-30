(function () {
    angular.module("Rebrews").directive("cellEditor", function () {
        return {
            restrict: "E",
            bindToController: {
                item: "=",
                columnDefinition: "=",
                selectorItems: "=",
                itemChanged: "&"
            },
            scope: {},
            // view
            templateUrl: "/app/_directives/cell-editor/cell-editor.template.html",
            // controller
            controller: "cellEditorController as ctrl",
            link: function (scope, element, attr, thisCtrl) {
                element.on("dblclick", function () {
                    scope.$apply(function () {
                        if (thisCtrl.columnDefinition.isEditable)
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
        };
    })
        .controller("cellEditorController", cellEditorController);
    cellEditorController.$inject = ["$scope", "$stateParams", "$filter"];
    function cellEditorController($scope, $stateParams, $filter) {
        var self = this;
        var lastValue = "";
        self.confirm = function () {
            if (self.isEditing) {
                self.isEditing = false;
                var currValue = getItemVal(self.item, self.columnDefinition);
                if (lastValue !== currValue) {
                    self.itemChanged()(self.item);
                    lastValue = currValue;
                }
            }
        };
        function initialize() {
            lastValue = getItemVal(self.item, self.columnDefinition);
        }
        //Call initialization function
        initialize();
    }
    function getItemVal(item, colDef) {
        return angular.toJson(item[colDef.binding]);
    }
})();
//# sourceMappingURL=cell-editor.js.map