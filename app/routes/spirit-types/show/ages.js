import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var spiritType = this.modelFor('spiritTypes.show');

    return Ember.$.getJSON("/api/spirit_types/" + spiritType.id + "/ages");
  },

  setupController(controller, model) {
    this._super(controller, model);

    var spiritType = this.modelFor('spiritTypes.show');
    controller.set('spiritType', spiritType);
  }
});
