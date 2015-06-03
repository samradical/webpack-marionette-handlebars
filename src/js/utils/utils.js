// app dependencies
var App = require('../app');

// define module
App.module('Utils', function(Utils, App, Backbone, Marionette, $, _) {

    'use strict';

    Utils.renderViewAsRootEl = function(view) {
        if (!view || !view.template) {
            return view;
        }

        if (_.isString(view.template)) {
            view.template = _.template($(view.template).html());
        }

        var modelAttributes = {};
        if (view.model) {
            modelAttributes = view.model.attributes || {};
        }

        var data = view.hasOwnProperty('serializeData') ? view.serializeData() : modelAttributes;
        if (view.templateHelpers) {
            _.extend(data, view.templateHelpers);
        }

        var newEl = view.template(data);
        view.setElement(newEl);
        return view;
    };

});

// export
module.exports = App.Utils;