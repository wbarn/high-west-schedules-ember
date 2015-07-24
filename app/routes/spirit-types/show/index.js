import Ember from 'ember';

export default Ember.Route.extend({
  redirect: function() {
    var spiritType = this.modelFor('spiritTypes.show');

    this.transitionTo('spiritTypes.show.ages', spiritType.id);
  }
});
