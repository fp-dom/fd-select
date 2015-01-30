import test from 'prova';
import { fpSelect } from './';


test('fp-select', (t) => {
  t.plan(1);
  const HTML =  `<textarea style="width:300px; height:200px"></textarea>
  <ul data-foo="bar" class="fruits">
  <li class="fruit">apple</li>
  <li class="fruit">orange</li>
  <li class="fruit">plum</li>
  </ul>`;
  t.equal(fpSelect(HTML)('.fruits').attr('data-foo'), 'bar');
});
