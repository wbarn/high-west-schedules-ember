import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var spiritTypeId = params['spirit-type_id'];
    return Ember.RSVP.hash({
      spiritType: this.store.find('spirit-type', spiritTypeId),
      inventory: Ember.$.getJSON("/api/spirit_types/" + spiritTypeId + "/inventory")
    });
  },

  setupController: function(controller, model) {
    controller.setProperties(model);
  }
});
