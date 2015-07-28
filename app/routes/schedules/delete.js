import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    deleteSchedule: function(schedule) {
      schedule.destroyRecord().then(this.transitionTo('schedules'));
    }
  }
});
