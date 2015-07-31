import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['row', 'new-form'],
  event: null,
  recipes: null,
  item: null,
  store: Ember.inject.service(),

  initItem: function() {
    let store = this.get('store');
    this.set('item', store.createRecord('processing-item'));
  }.on('didInsertElement'),

  actions: {
    save: function(item) {
      item.set('event', this.get('event'));
      item.save().then(this.initItem());
    }
  }
});
