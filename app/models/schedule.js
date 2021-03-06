import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  notes: DS.attr('string'),
  createdAt: DS.attr('utc'),

  events: DS.hasMany('event')
});
