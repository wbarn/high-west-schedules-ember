import DS from 'ember-data';

export default DS.Model.extend({
  age: DS.attr('number'),
  percentage: DS.attr('number'),

  recipe: DS.belongsTo('recipe', { async: true }),
  spiritType: DS.belongsTo('spirit-type', { async: true })
});
