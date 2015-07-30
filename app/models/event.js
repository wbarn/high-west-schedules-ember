import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr('utc'),
  notes: DS.attr('string'),

  schedule: DS.belongsTo('schedule'),
  productionItems: DS.hasMany('production-items')
});
