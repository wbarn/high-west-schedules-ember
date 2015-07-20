import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'high-west-schedules/tests/helpers/start-app';

var application;

module('Acceptance | recipes', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('using recipes', function(assert) {
  var recipes = server.createList('recipe', 3);
  visit('/recipes');

  andThen(function() {
    assert.equal(currentURL(), '/recipes', 'Visit /recipes');
    assert.equal( find('tbody tr').length, 3, 'Count recipes');
    assert.equal( find('tbody tr:first td:first').text(), recipes[0].name, 'Match first recipe name');
  });

  // Go to New
  click('a:contains(New)');

  andThen(function(){
    assert.equal(currentURL(),'/recipes/new', 'Go to New');
  });

  // Create Recipe
  fillIn('input#name', 'RECIPE NAME');
  fillIn('input#proof', 90);
  fillIn('textarea#notes', 'RECIPE NOTES');
  click('button:contains(Save)');
  andThen(function() {
    assert.equal(currentRouteName(), 'recipes.show.index', 'Go to Show Index');
  });

  // Go to Edit
  click('a:contains(edit)');
  andThen(function() {
    assert.equal(currentRouteName(), 'recipes.edit', 'Go to Edit');
  });
});
