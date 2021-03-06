import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['modal', 'fade'],

  showModal: function() {
    this.$().modal({
      keyboard: false,
      backdrop: 'static'
    });
  }.on('didInsertElement'),

  hideModal: function() {
    this.$().modal('hide');
  }.on('willDestroyElement')
});
