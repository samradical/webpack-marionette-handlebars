var Marionette = require('backbone.marionette');
var App = new Marionette.Application();

App.addInitializer(function() {
    require('./common/helpers');

    require('./utils/utils');

    require('./controllers/app_controller');

    require('./views/app_view');
});

module.exports = App;