import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['age'],
  age: null,

  filteredLots: Ember.computed('age', 'model', function() {
    var age = parseInt(this.get('age'));
    var lots = this.get('model.lots');

    if (age) {
      return lots.filter(function(lot) {
        return lot.age === age;
      });
    } else {
      return lots;
    }
  }),

  actions: {
    resetAgeFilter: function() {
      this.set('age', null);
    }
  }
});
