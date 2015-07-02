var directives = [
    require('./postPane'),
    require('./postTabs'),
    require('./userLink')
];

module.exports = function(app) {
    for (var i = 0; i < directives.length; i++) {
        directives[i](app);
    }
};
