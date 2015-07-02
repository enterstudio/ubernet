module.exports = function($routeProvider) {
    $routeProvider.when('/photos', {
        templateUrl: '/templates/pages/photos.html',
        controller: 'PhotosController'
    });
};
