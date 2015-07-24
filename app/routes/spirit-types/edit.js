import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    updateSpiritType: function(){
      var spiritType = this.get('currentModel');

      this.transitionTo('spiritTypes.show', spiritType.save());
    },

    cancelUpdateSpiritType: function(spiritType) {
      spiritType.rollback();

      this.transitionTo('spiritTypes.show', spiritType);
    }
  }
});
