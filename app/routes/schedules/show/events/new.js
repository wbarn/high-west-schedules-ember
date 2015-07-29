import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var schedule = this.modelFor('schedules.show');

    return Ember.RSVP.hash({
      schedule: schedule,
      event: this.store.createRecord('event')
    });
  },

  setupController: function(controller, model) {
    controller.setProperties(model);
  },

  actions: {
    createEvent: function(schedule, event) {
      event.set('schedule', schedule);
      event.save().then(this.transitionTo('schedules.show', schedule));
    },

    cancelCreateEvent: function(schedule, event) {
      event.destroyRecord().then(this.transitionTo('schedules.show', schedule));
    }
  }
});
