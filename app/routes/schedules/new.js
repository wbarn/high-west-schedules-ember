import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('schedule');
  },

  actions: {
    createSchedule: function() {
      var schedule = this.get('currentModel');
      schedule.save();

      this.transitionTo('schedules');
    },

    cancelCreateSchedule: function() {
      var schedule = this.get('currentModel');

      schedule.destroyRecord();
      this.transitionTo('schedules');
    }
  }
});
