import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr("string"),
  proof: DS.attr("number"),
  notes: DS.attr("string")
});
