import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    deleteRecipe: function(recipe) {
      recipe.destroyRecord();
      this.transitionTo('recipes');
    }
  }
});
