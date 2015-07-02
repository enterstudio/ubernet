// Apply all routes
var routes = [
    require('./home'),
    require('./photos'),
    require('./people'),
    require('./teams'),
    require('./cards'),
    require('./admin')
];

module.exports = function(app, models) {
    for (var i = 0; i < routes.length; i++) {
        routes[i](app, models);
    }
};
