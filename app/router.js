import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('locations');
  this.route('recipes', function() {
    this.route('new');
    this.route('show', { path: '/:recipe_id' }, function() {
      this.route('ingredients', function() {
        this.route('new');
      });
    });
    this.route('edit', { path: '/:recipe_id/edit' });
    this.route('delete', { path: '/:recipe_id/delete' });
  });
});

export default Router;
