module.exports = function($routeProvider) {
    $routeProvider.when('/cards', {
        templateUrl: '/templates/pages/cards.html',
        controller: 'CardsController'
    });
};
