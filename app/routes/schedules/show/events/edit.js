import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('event', params['event_id']);
  },

  actions: {
    updateEvent: function(event) {
      event.save().then(this.transitionTo('schedules.show.events.show', event));
    },

    cancelUpdateEvent: function(event) {
      event.rollback();
      this.transitionTo('schedules.show.events.show', event);
    }
  }
});
