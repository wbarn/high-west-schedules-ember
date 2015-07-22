import Ember from 'ember';

export default Ember.Route.extend({
  redirect: function() {
    var recipe = this.modelFor('recipes.show');
    this.transitionTo('recipes.show', recipe);
  }
});
