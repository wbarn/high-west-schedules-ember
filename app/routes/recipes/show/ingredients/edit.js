import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var recipe = this.modelFor('recipes.show');

    return Ember.RSVP.hash({
      recipe: recipe,
      ingredient: this.store.find('ingredient', params.ingredient_id),
      spiritTypes: this.store.findAll('spirit-type')
    });
  },

  setupController: function(controller, model) {
    controller.setProperties(model);
  },

  actions: {
    updateIngredient: function(recipe, ingredient) {
      ingredient.save().then(this.transitionTo('recipes.show', recipe));
    },

    deleteIngredient: function(recipe, ingredient) {
      ingredient.destroyRecord().then(this.transitionTo('recipes.show', recipe));
    }
  }
});
