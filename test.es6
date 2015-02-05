import assert from 'assert';
import { select, selectOne } from './';


describe('fp-select', () => {
  const HTML =  `
    <ul data-foo="bar" class="fruits">
    <li class="fruit">apple</li>
    <li class="fruit">orange</li>
    <li class="fruit">plum</li>
    </ul>
  `;
  let fixture;

  beforeEach(() => {
    fixture = document.createElement('div');
    fixture.innerHTML=HTML;
    document.body.appendChild(fixture);
  });


  it('#select', () => {
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

  it('#selectOne', () => {
    assert.equal(selectOne('.fruits').dataset.foo, 'bar');
    assert.equal(selectOne(fixture, '.fruits').dataset.foo, 'bar');
    try {
      selectOne(null);
      assert.ok(false);
    } catch (e) {
      assert.ok(true);
    }
  });
});
