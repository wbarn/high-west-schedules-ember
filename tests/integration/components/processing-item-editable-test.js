import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('processing-item-editable', 'Integration | Component | processing item editable', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{processing-item-editable}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#processing-item-editable}}
      template block text
    {{/processing-item-editable}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
