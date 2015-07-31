import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['row'],
  showFields: false,

  actions: {
    edit: function(){
      this.set('showFields', true);
    },

    cancel: function(item) {
      item.rollback();
      this.set('showFields', false);
    },

    save: function(item) {
      item.save().then(this.set('showFields'));
    },

    delete: function(item) {
      item.destroyRecord();
    }
  }
});
