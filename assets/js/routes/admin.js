module.exports = function($routeProvider) {
    $routeProvider.when('/admin', {
        templateUrl: '/templates/pages/admin.html',
        controller: 'AdminController'
    });
};
