import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('spirit-type');
  },

  actions: {
    createSpiritType: function() {
      var spiritType = this.get('currentModel');

      this.transitionTo('spiritTypes.show', spiritType.save());
    },

    cancelCreateSpiritType: function() {
      var spiritType = this.get('currentModel');

      spiritType.destroyRecord();
      this.transitionTo('spiritTypes');
    }
  }
});
