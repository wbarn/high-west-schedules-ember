/*
  This is an example factory definition.

  Create more files in this directory to define additional factories.
*/
import Mirage/*, {faker} */ from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name: function(i) { return 'Recipe ' + i; },
  proof: 90,
  notes: 'RECIPE NOTES'
});
