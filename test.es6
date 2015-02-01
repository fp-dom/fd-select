import test from 'prova';
import { select } from './';


test('fp-select', (t) => {
  t.plan(6);
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
  
  t.equal(select('.fruits').length, 1);
  t.equal(select('.fruits')[0].dataset.foo, 'bar');
  t.equal(select(fixture, '.fruits').length,1);
  t.equal(select(fixture, '.fruits')[0].dataset.foo, 'bar');
  t.equal(select(fixture)('.fruits').length,1);
  try {
    select(null);
    t.fail();
  } catch (e) {
    t.ok(true);
  }
});
