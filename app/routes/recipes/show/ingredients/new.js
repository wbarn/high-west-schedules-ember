import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var recipe = this.modelFor('recipes.show');

    return Ember.RSVP.hash({
      recipe: recipe,
      ingredient: this.store.createRecord('ingredient', { recipe: recipe}),
      spiritTypes: this.store.findAll('spirit-type')
    });
  },

  setupController: function(controller, model) {
    controller.setProperties(model);
  },

  actions: {
    createIngredient: function(recipe, ingredient) {
      ingredient.save().then(this.transitionTo('recipes.show', recipe));
    }
  }
});
