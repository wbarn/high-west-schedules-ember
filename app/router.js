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
        this.route('edit', { path: '/:ingredient_id/edit'});
      });
    });
    this.route('edit', { path: '/:recipe_id/edit' });
    this.route('delete', { path: '/:recipe_id/delete' });
  });
  this.route('spiritTypes', function() {
    this.route('new');
    this.route('show', { path: '/:spirit_type_id' }, function() {
      this.route('ages');
      this.route('lots', function() {
        this.route('show', { path: ':lot_id' });
      });
    });
    this.route('edit', { path: '/:spirit_type_id/edit'});
    this.route('delete', { path: '/:spirit_type_id/delete'});
  });
  this.route('login');
});

export default Router;
