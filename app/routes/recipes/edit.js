import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    updateRecipe: function() {
      var recipe = this.get('currentModel');

      this.transitionTo('recipes.show', recipe.save());
    },

    cancelUpdateRecipe: function(recipe) {
      recipe.rollback();

      this.transitionTo('recipes.show', recipe);
    }
  }
});
