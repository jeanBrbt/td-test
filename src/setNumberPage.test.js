import { setNumberPages } from './setNumberPages.js';

describe('setNumberPages', () => {
  it('devrait retourner 1 si max est supérieur ou égal à total', () => {
    // Math.ceil(max >= total ? 1 : Number(total / max) - 1); donc Math.ceil(1)
    const result = setNumberPages({ total: 10, max: 10 });
    expect(result).toBe(1);
  });

  it('devrait retourner le nombre de pages calculé correctement', () => {
    const result = setNumberPages({ total: 20, max: 5 });
    // total / max = 20 / 5 = 4, donc Math.ceil(4 - 1) = 3
    expect(result).toBe(3);
  });

  it('devrait retourner 1 si total est inférieur à max', () => {
    const result = setNumberPages({ total: 5, max: 10 });
    expect(result).toBe(1);
  });

  it('devrait retourner 1 si total est égal à max', () => {
    const result = setNumberPages({ total: 5, max: 5 });
    expect(result).toBe(1);
  });
});

