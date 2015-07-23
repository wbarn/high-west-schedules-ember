import Ember from 'ember';

export default Ember.Controller.extend({
  // Constants
  litersPerGallon: 3.785412,
  mlsPerBottle: 750,
  bottlesPerCase: 12,

  // Variable properties
  cases: 100,
  proof: Ember.computed.alias('model.proof'),

  litersPerCase: Ember.computed('mlsPerBottle', 'bottlesPerCase', function() {
    return (this.get('mlsPerBottle') * this.get('bottlesPerCase')) / 1000;
  }),

  liquidGallonsPerCase: Ember.computed(function() {
    return this.get('litersPerCase') / this.get('litersPerGallon');
  }),

  proofGallonsPerCase: Ember.computed('proof', 'liquidGallonsPerCase', function() {
    return (this.get('liquidGallonsPerCase') * this.get('proof')) / 100;
  }),

  totalLiquidGallons: Ember.computed('cases', 'liquidGallonsPerCase', function() {
    return this.get('liquidGallonsPerCase') * this.get('cases');
  }),

  totalProofGallons: Ember.computed('proofGallonsPerCase', 'cases', function() {
    return this.get('proofGallonsPerCase') * this.get('cases');
  })

  });
