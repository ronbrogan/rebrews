(function () {

    angular.module('rebrews').controller('recipeController', recipeController);

    recipeController.$inject = ['rttService'];

    function recipeController(rttService) {
        var self = this;
        self.resolved = rttService.resolved;
        self.requests = rttService.requests;

        activate();

        function activate() { }
    }
})();
