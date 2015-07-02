module.exports = function($routeProvider) {
    $routeProvider.when('/people/:person?', {
        templateUrl: '/templates/pages/people.html',
        controller: 'PeopleController'
    });
};
