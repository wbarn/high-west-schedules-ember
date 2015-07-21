import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr("string"),
  proof: DS.attr("number"),
  notes: DS.attr("string"),

  ingredients: DS.hasMany("ingredients"),

  percentageTotal: Ember.computed('ingredients.@each.percentage', function() {
    var ingredients = this.get('ingredients');
    var total = 0;

    ingredients.forEach(function(ingredient) {
      var percent = parseFloat(ingredient.get('percentage'));
      if (isNaN(percent)) { percent = 0; }
      total += percent;
    });
    return total.toFixed(2);
  }),

  percentageDiff: Ember.computed('percentageTotal', function() {
    var percentageTotal = this.get('percentageTotal');

    return Math.abs(100 - percentageTotal);
  }),

  percentageInvalid: Ember.computed('percentageDiff', function() {
    return this.get('percentageDiff') !== 0;
  }),

  percentageSatus: Ember.computed('percentageTotal', function() {
    var statusClass;
    var percentageTotal = this.get('percentageTotal');

    if (percentageTotal < 100) {
      statusClass = 'warning';
    } else if (parseInt(percentageTotal) === 100) {
      statusClass = 'success';
    } else if (percentageTotal > 100) {
      statusClass = 'danger';
    }

    return statusClass;
  })
});
