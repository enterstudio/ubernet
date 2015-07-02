module.exports = function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/templates/pages/home.html',
        controller: 'HomeController'
    });
};
