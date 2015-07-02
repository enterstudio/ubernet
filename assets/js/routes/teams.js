module.exports = function($routeProvider) {
    $routeProvider.when('/teams/:team?', {
        templateUrl: '/templates/pages/teams.html',
        controller: 'TeamController'
    });
};
