/**
 * Ubernet
 *
 * @author Tom Barham <me@mrfishie.com>
 * @version 1.0.0
 */

window.debug = require('debug');

var $ = require('jquery');
var angular = require('angular');
window.jQuery = $;
window.angular = angular;

var debug = require('debug')('ubernet');

var _jquerySticky = require('jquery-sticky');
var _agFontAwesome = require('angular-fontawesome');
var _agElastic = require('angular-elastic');

debug('Initializing Sails.io');

var socketIO = require('socket.io-client');
var io = require('sails.io.js')(socketIO);
var starmap = require('starmapjs')(io);

var models = require('./models')(starmap);

window.models = models;

$(function() {
    debug('Page loaded!');
    $(".header-bar").sticky({
        topSpacing: ($(".header.container").height() - 5) * -1,
        className: "stuck",
        getWidthFrom: "body",
        responsiveWidth: true
    });
});

debug('Creating Angular app');
var app = angular.module('ubernet', [
    require('angular-route'),
    require('angular-moment'),
    require('angular-shims-placeholder'),
    require('angular-sanitize'),
    'monospaced.elastic',
    'picardy.fontawesome'
]);
module.exports = app;

// Setup JST to work with ng-include
/*app.config(['$provide', function($provide) {
    $provide.decorator('$templateCache', function($delegate, $sniffer) {
        var originalGet = $delegate.get;

        $delegate.get = function(key) {
            var value = originalGet(key);
            if (!value) {
                console.log(key);
                value = JST['assets' + key]();
                if (value) $delegate.put(key, value);
            }
            return value;
        };

        return $delegate;
    });
    return this;
}]);*/

debug('Registering routes');
require('./routes')(app);

debug('Registering controllers');
require('./controllers')(app, models);

debug('Creating directives');
require('./directives')(app);

debug('Done!');
