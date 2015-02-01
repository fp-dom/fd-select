import assert from 'assert';
import { select } from './';


it('fp-select', () => {
  const HTML =  `
    <ul data-foo="bar" class="fruits">
    <li class="fruit">apple</li>
    <li class="fruit">orange</li>
    <li class="fruit">plum</li>
    </ul>
  `;
  var fixture = document.createElement('div');
  fixture.innerHTML=HTML;
  document.body.appendChild(fixture);
  
  assert.equal(select('.fruits').length, 1);
  assert.equal(select('.fruits')[0].dataset.foo, 'bar');
  assert.equal(select(fixture, '.fruits').length,1);
  assert.equal(select(fixture, '.fruits')[0].dataset.foo, 'bar');
  assert.equal(select(fixture)('.fruits').length,1);
  try {
    select(null);
    assert.ok(false);
  } catch (e) {
    assert.ok(true);
  }
});
