import test from 'prova';
import { select } from './';


test('fp-select', (t) => {
  t.plan(4);
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
  
  t.equal(typeof select(fixture),"function");
  t.equal(select('.fruits').length, 1);
  t.equal(select(fixture)('.fruits').length,1);
  t.equal(!!select(null),true);
});
