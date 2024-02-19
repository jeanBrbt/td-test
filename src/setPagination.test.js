/*import { setPagination } from './setPagination';
import { setCurrentPage } from './setCurrentPage';
import { setNumberPages } from './setNumberPages';
describe('setPagination', () => {


  it('devrait retourner les valeurs correctes avec les paramètres par défaut', () => {
    const result = setPagination({});
    expect(result.total).toEqual(1); // La valeur par défaut est 1, cast en nombre
    expect(result.numberItems).toEqual(1); // La valeur par défaut est 1, convertie en nombre
    expect(result.numberPages).toEqual(setNumberPages(1,1)); // setNumberPagesfn est mocké pour retourner 0
    expect(result.currentPage).toEqual(setCurrentPage(1,1)); // setCurrentPageFn est mocké pour retourner 1
  });

  it('devrait utiliser les fonctions fournies pour calculer les valeurs', () => {
    const result = setPagination({
      total: 10,
      skip: 5,
      max: 2,
        setCurrentPageFn: jest.fn(() => 2,5),
        setNumberPagesfn: jest.fn(() => 5,),
    });



    // Vérifier que les valeurs retournées sont celles renvoyées par les fonctions mockées
    expect(result.total).toEqual(10);
    expect(result.numberItems).toEqual(2);
    expect(result.numberPages).toEqual(5);
    expect(result.currentPage).toEqual(7);
  });
});

*/




import { setPagination } from './setPagination.js';

// Mock des fonctions setCurrentPage et setNumberPages
jest.mock('./setCurrentPage', () => ({
  setCurrentPage: jest.fn(({ max, skip }) => Math.ceil(Number(skip / max))),
}));

jest.mock('./setNumberPages', () => ({
  setNumberPages: jest.fn(({ total, max }) => Math.ceil(Number(total / max) - 1)),
}));

describe('setPagination', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('devrait retourner les valeurs correctes avec les paramètres par défaut', () => {
    const result = setPagination({});
    expect(result.total).toBe(1); 
    expect(result.numberItems).toBe(1); 
    expect(result.numberPages).toBe(0); 
    expect(result.currentPage).toBe(1); 
  });

  it('devrait utiliser les fonctions fournies pour calculer les valeurs', () => {
    // Mock des fonctions pour retourner des valeurs spécifiques
    const setCurrentPageFnMock = jest.fn(({ max, skip }) => max + skip);
    const setNumberPagesFnMock = jest.fn(({ total, max }) => total / max);

    const result = setPagination({
      total: 10,
      skip: 5,
      max: 2,
      setCurrentPageFn: setCurrentPageFnMock,
      setNumberPagesfn: setNumberPagesFnMock,
    });

    expect(setCurrentPageFnMock).toHaveBeenCalledWith({ max: 2, skip: 5 });
    expect(setNumberPagesFnMock).toHaveBeenCalledWith({ total: 10, max: 2 });

    expect(result.total).toBe(10);
    expect(result.numberItems).toBe(2);
    expect(result.numberPages).toBe(5);
    expect(result.currentPage).toBe(7);
  });
});
