var angular = require('angular');

module.exports = function(app) {
    app.directive('postPane', function() {
        return {
            require: '^postTabs',
            restrict: 'E',
            transclude: true,
            scope: {
                title: '@',
                icon: '@',
                class: '@'
            },
            link: function(scope, element, attrs, tabsCtrl) {
                tabsCtrl.addPane(scope);
            },
            template:
                '<div ng-class="{active: selected}" class="post-pane" ng-transclude>' +
                '</div>',
            replace: true
        };
    });
};
