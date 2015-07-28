import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    updateSchedule: function() {
      var schedule = this.get('currentModel');

      this.transitionTo('schedules.show', schedule.save());
    },

    cancelUpdateSchedule: function(schedule) {
      schedule.rollback();

      this.transitionTo('schedules.show', schedule);
    }
  }
});
