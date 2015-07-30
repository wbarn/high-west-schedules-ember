import DS from 'ember-data';

export default DS.Model.extend({
  age: DS.attr('number'),
  proofGallons: DS.attr('number'),
  notes: DS.attr('string'),

  event: DS.belongsTo('event', { async: true }),
  spiritType: DS.belongsTo('spirit-type', { async: true})
});
