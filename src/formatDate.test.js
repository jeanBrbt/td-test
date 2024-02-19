import { isValidDate, formatDate, setDate } from './formatDate.js';

describe('isValidDate', () => {
  it('devrait retourner true si la date est une chaîne non vide', () => {
    const result = isValidDate('2022-02-19');
    expect(result).toBe(true);
  });

  it('devrait retourner false si la date est une chaîne vide', () => {
    const result = isValidDate('');
    expect(result).toBe(false);
  });

  it('devrait retourner false si la date est null', () => {
    const result = isValidDate(null);
    expect(result).toBe(false);
  });
});

describe('formatDate', () => {
  it('devrait formater la date correctement avec la locale par défaut', () => {
    const result = formatDate('2022-02-19');
    expect(result).toBe('19/02/2022');
  });

  it('devrait formater la date correctement avec une locale spécifiée', () => {
    const result = formatDate('2022-02-19', 'en-US');
    expect(result).toBe('2/19/2022');
  });

  it('devrait retourner une chaîne vide si la date est une chaîne vide', () => {
    const result = formatDate('');
    expect(result).toBe('');
  });
});

describe('setDate', () => {
  it('devrait retourner la date formatée si la date est valide', () => {
    const formatDateFnMock = jest.fn(() => '19/02/2022');
    const isValidDateFnMock = jest.fn(() => true);

    const result = setDate({
      date: '2022-02-19',
      formatDateFn: formatDateFnMock,
      isValidDateFn: isValidDateFnMock,
    });

    expect(isValidDateFnMock).toHaveBeenCalledWith('2022-02-19');
    expect(formatDateFnMock).toHaveBeenCalledWith('2022-02-19');

    expect(result).toBe('19/02/2022');
  });

  it('devrait retourner une chaîne vide si la date n\'est pas valide', () => {
    const formatDateFnMock = jest.fn();
    const isValidDateFnMock = jest.fn(() => false);

    const result = setDate({
      date: 'date-invalide',
      formatDateFn: formatDateFnMock,
      isValidDateFn: isValidDateFnMock,
    });

    expect(isValidDateFnMock).toHaveBeenCalledWith('date-invalide');

    expect(result).toBe('');
  });
});
