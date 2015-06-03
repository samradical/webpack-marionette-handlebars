// app dependencies
var App = require('../app');
// define module
App.module('AppController', function(AppController, App, Backbone, Marionette, $, _) {

    // controller class
    AppController.Controller = Marionette.Controller.extend({
        initialize: function() {
            App.addRegions({
                main: '#content'
            });

            setTimeout(function() {
                App.main.show(new App.Views.Main);
            }, 200);

        }
    });

    // instance
    AppController.instance = new AppController.Controller();

});

// export
module.exports = App.AppController;