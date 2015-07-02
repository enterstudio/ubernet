module.exports = function($routeProvider) {
    $routeProvider.otherwise({
        templateUrl: '/templates/pages/404.html'
    });
};
