import Ember from 'ember';

export default Ember.Component.extend({
  value: null,

  actions: {
    change() {
      const changeAction = this.get('action');
      const value = this.$('input').val();

      changeAction(value);
    }
  }
});
