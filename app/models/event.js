import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr('utc'),
  notes: DS.attr('string'),

  productionItems: DS.hasMany('production-items'),
  processingItems: DS.hasMany('processing-items')
});
