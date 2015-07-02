module.exports = function(app) {
    app.directive('userLink', function() {
        return {
            restrict: 'E',
            scope: {
                'user': '='
            },
            template:
                '<a ng-href="{{user.url}}" title="View {{user.firstName}}\'s profile">{{user.fullName}}</a>',
            replace: true
        };
    });
};
