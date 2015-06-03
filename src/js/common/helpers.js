var Handlebars = require("hbsfy/runtime");
//rivets
var rivets = require('rivets');
rivets.binders.input = {
    publishes: true,
    bind: function(el) {
        adapter = this.config.adapters[this.key.interface]
        model = this.model
        keypath = this.keypath

        this.callback = function() {
            value = adapter.read(model, keypath)
            adapter.publish(model, keypath, !value)
        }
        el.addEventListener('input', this.publish);
    },
    unbind: function(el) {
        el.removeEventListener('input', this.publish);
    },
    routine: rivets.binders.value.routine
};

//use as html attributes: rv-src="model.imgSrc"

//rv-src
rivets.binders.src = function(el, value) {
    el.src = value;
};

//rv-width
rivets.binders.width = function(el, value) {
    el.style.width = value;
};