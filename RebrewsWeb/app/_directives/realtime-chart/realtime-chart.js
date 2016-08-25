(function () {

    angular.module("Rebrews").directive("realtimeChart", function () {
        return {
            restrict: "E",
            scope: {
				
            },
            // view
            templateUrl: "/app/_directives/realtime-chart/realtime-chart.template.html",
            // controller
            controller: "realtimeChartController as chart",
			link: function(scope, element, attr, thisCtrl){
				
			}
        }
    })

    .controller("realtimeChartController", realtimeChartController);

    realtimeChartController.$inject = ["$scope", "$stateParams"];

    function realtimeChartController($scope, $stateParams) {
        var self = this;

        self.width = 640;
        self.height = 270;

        self.axisLabels = ["X-Axis", "Y-Axis"];
        self.axisUnits = ["Seconds", "Data"];
        self.axisInset = [25, 50];

        self.title = "Chart Description";

        self.points = [
            { 'x': 3, 'y': 7 },
            { 'x': 5, 'y': 15 },
            { 'x': 7, 'y': 8 },
            { 'x': 11, 'y': 17 },
            { 'x': 13, 'y': 13 },
            { 'x': 17, 'y': 23 }
        ];

        var x = d3.time.scale().range([0, self.width]);
        var y = d3.scale.linear().range([self.height, 0]);

        self.xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom");

        self.yAxis = d3.svg.axis()
            .scale(y)
            .orient("left");

        x.domain(d3.extent(self.points, function (d) { return d.x }));
        y.domain(d3.extent(self.points, function (d) { return d.y }));

        self.line = d3.svg.line()
          .x(function (d) { return x(d.x); })
          .y(function (d) { return y(d.y); });

        function initialize() {

        }

        //Call initialization function
        initialize();
    }
})();
