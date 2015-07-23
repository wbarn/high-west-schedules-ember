import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    deleteSpiritType: function(spiritType) {
      spiritType.destroyRecord();
      this.transitionTo('spiritTypes');
    }
  }
});
