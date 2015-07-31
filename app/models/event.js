import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr('utc'),
  notes: DS.attr('string'),

  schedule: DS.belongsTo('schedule'),
  productionItems: DS.hasMany('production-items'),
  processingItems: DS.hasMany('processing-items'),

  productionitemsCount: Ember.computed('productionItems.length', function() {
    return this.get('productionItems.length');
  }),

  processingItemsCount: Ember.computed('processingItems.length', function() {
    return this.get('processingItems.length');
  })
});
