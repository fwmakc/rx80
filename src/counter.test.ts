import { describe, expect, it } from 'vitest';
import { JSDOM } from 'jsdom';
import { setupCounter } from './counter';

describe('counter increments when clicked', () => {
  const dom = new JSDOM(`<!DOCTYPE html><html><body>
    <button id="counter" type="button"></button>
</body></html>`);
  const document = dom.window.document;

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const counter = document.querySelector<HTMLButtonElement>('#counter')!;
  setupCounter(counter);

  it('initial state', () => {
    expect(counter.textContent).toBe('count is 0');
  });

  it('first click', () => {
    counter.click();
    expect(counter.textContent).toBe('count is 1');
  });

  it('double click', () => {
    counter.click();
    counter.click();
    expect(counter.textContent).toBe('count is 3');
  });
});
