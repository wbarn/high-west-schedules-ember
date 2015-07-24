import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var spiritType = this.modelFor('spiritTypes.show');

    return Ember.$.getJSON("/api/spirit_types/" + spiritType.id + "/lots");
  }
});
