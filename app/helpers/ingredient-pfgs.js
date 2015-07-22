import Ember from 'ember';
import accounting from "accounting";

export function ingredientPfgs(params) {
  if (params.length !== 2) {
    console.error('requires two arguments');
    return '';
  }
  var totalProofGallons = params[0];
  var ingredientPercentage = params[1];
  var specificPfgs = (totalProofGallons * ingredientPercentage) / 100;

  return accounting.formatNumber(specificPfgs, 3);
}

export default Ember.Helper.helper(ingredientPfgs);
