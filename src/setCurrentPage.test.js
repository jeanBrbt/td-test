import { setCurrentPage } from './setCurrentPage.js';

describe('setCurrentPage', () => {
  it('devrait retourner 1 si max est égal à 0', () => {
    const result = setCurrentPage({ max: 0, skip: 10 });
     // condition (+max !== 0 && Math.ceil(Number(skip / max)))  est fausse donc on retourne 1
     expect(result).toBe(1);
  });

  it('devrait retourner le numéro de page calculé correctement', () => {
    const result = setCurrentPage({ max: 5, skip: 12 });
    // skip / max = 12 / 5 = 2.4, donc Math.ceil(2.4) = 3
    expect(result).toBe(3);
  });

  it('devrait retourner 1 si skip est égal à 0', () => {
    const result = setCurrentPage({ max: 10, skip: 0 });
     // condition (+max !== 0 && Math.ceil(Number(skip / max)))  est fausse donc on retourne 1
    expect(result).toBe(1);
  });

  it('devrait retourner 1 si max est égal à 1', () => {
    const result = setCurrentPage({ max: 1, skip: 5 });
    // 5/1 = 5 donc Math.ceil(1) = 1
    expect(result).toBe(5);
  });

  it('devrait retourner 1 si max et skip sont tous deux égaux à 1', () => {
    // 1/1 = 5 donc Math.ceil(5) = 5
    const result = setCurrentPage({ max: 1, skip: 1 });
    expect(result).toBe(1);
  });
});
