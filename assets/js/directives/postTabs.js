var angular = require('angular');

module.exports = function(app) {
    app.directive('postTabs', function() {
        return {
            restrict: 'E',
            transclude: true,
            scope: {},
            controller: function($scope, $element) {
                var panes = $scope.panes = [];
                $scope.selectedPane = null;

                $scope.select = function(pane) {
                    angular.forEach(panes, function(pane) {
                        pane.selected = false;
                    });
                    pane.selected = true;
                    $scope.selectedPane = pane;
                };

                this.addPane = function(pane) {
                    if (!panes.length) $scope.select(pane);
                    panes.push(pane);
                };
            },
            template:
                '<div ng-class="[class, selectedPane.class]">' +
                    '<div class="top modes">' +
                        '<a href="javascript:void(0)" ng-repeat="pane in panes" ng-class="{active:pane.selected}" title="{{pane.title}}" ng-click="select(pane)">' +
                            '<i class="fa" ng-class="pane.icon"></i> {{pane.title}}' +
                        '</a>' +
                    '</div>' +
                    '<div class="main" ng-transclude></div>' +
                '</div>',
            replace: true
        };
    });
};
