import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return Ember.RSVP.hash({
      event: this.store.find('event', params['event_id']),
      spiritTypes: this.store.findAll('spirit-type')
    });
  },

  setupController: function(controller, model) {
    controller.setProperties(model);
  }
});
