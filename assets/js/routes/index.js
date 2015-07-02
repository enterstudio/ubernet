// Apply all routes
var routes = [
    require('./home'),
    require('./photos'),
    require('./people'),
    require('./teams'),
    require('./cards'),
    require('./admin'),
    require('./404')
];

module.exports = function(app) {
    app.config(['$routeProvider', function($routeProvider) {
        for (var i = 0; i < routes.length; i++) {
            routes[i]($routeProvider);
        }
    }]);
};
