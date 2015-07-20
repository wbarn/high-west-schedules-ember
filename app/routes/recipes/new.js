import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('recipe');
  },

  actions: {
    createRecipe: function() {
      var recipe = this.get('currentModel');

      this.transitionTo('recipes.show', recipe.save());
    },

    cancelCreateRecipe: function() {
      var recipe = this.get('currentModel');
      recipe.destroyRecord();
      this.transitionTo('recipes');
    }
  }
});
