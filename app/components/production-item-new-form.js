import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  event: null,
  item: null,
  store: Ember.inject.service(),

  createItem: function() {
    let store = this.get('store');
    this.set('item', store.createRecord('production-item'));
  }.on('didInsertElement'),

  actions: {
    save: function(item) {
      item.set('event', this.get('event'));
      item.save();
    }
  }
});
