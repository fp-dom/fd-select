import test from 'prova';
import { select } from './';


test('fp-select', (t) => {
  t.plan(1);
  const HTML =  `<textarea style="width:300px; height:200px"></textarea>
  <ul data-foo="bar" class="fruits">
  <li class="fruit">apple</li>
  <li class="fruit">orange</li>
  <li class="fruit">plum</li>
  </ul>`;
  var fixture = document.createElement('div');
  fixture.innerHTML=HTML;
  document.body.appendChild(fixture);
  t.equal(select(fixture)('.fruits').attr('data-foo'), 'bar');
});
