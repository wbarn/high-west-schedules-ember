import DS from 'ember-data';

export default DS.Model.extend({
  cases: DS.attr('number'),
  proofGallons: DS.attr('number'),
  notes: DS.attr('string'),

  event: DS.belongsTo('event', { async: true }),
  recipe: DS.belongsTo('recipe', { async: true })
});
