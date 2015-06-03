// app dependencies
var App = require('../app');
var signals = require('signals');
var rivets = require('rivets');
// define module
App.module('Views', function(Views, App, Backbone, Marionette, $, _) {
    Views.Main = Marionette.ItemView.extend({
        template: require('../templates/app.hbs'),
        model: new Backbone.Model({
            name: "SAM",
            count: 0
        }),
        events: {
            'click #counter': 'upCount'
        },
        initialize: function(options) {
            //copy model to rivets
            this.rivetsModel = this.model.toJSON();
            //listen to if model changes
            this.model.on('change', this.onUpdateModel, this);
        },
        onRender: function() {
            return App.Utils.renderViewAsRootEl(this);
        },
        onShow: function() {
            //bind once on show
            this.binder = rivets.bind(this.el, {
                model: this.rivetsModel
            });
        },
        onUpdateModel: function() {
            //copy updated model to rivets to update the dom
            _.assign(this.rivetsModel, this.model.toJSON());
        },
        upCount: function() {
            //this.rivetsModel.count += 1;
            var c = this.model.get('count');
            this.model.set('count', c += 1);
        }
    });
});

// export
module.exports = App.Views;