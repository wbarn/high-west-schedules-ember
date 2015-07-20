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
  visit('/recipes');

  andThen(function() {
    assert.equal(currentURL(), '/recipes', 'Visit /recipes');
  });

  // Go to New
  click('a:contains(New)');

  andThen(function(){
    assert.equal(currentURL(),'/recipes/new', 'Go to New');
  });

  fillIn('input#name', 'RECIPE NAME');
  fillIn('input#proof', 90);
  fillIn('textarea#notes', 'RECIPE NOTES');
  click('button:contains(Save)');
  andThen(function() {
    assert.equal(currentRouteName(), 'recipes.show.index', 'Goes to recipes.show.index');
  });
});
