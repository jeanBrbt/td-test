import setConfirmClassModifier from './setConfirmClassModifier.js';

describe('setConfirmClassModifier', () => {
  it('devrait retourner la classe par défaut sans modification si hasErrors est faux', () => {
    const result = setConfirmClassModifier(false);
    expect(result).toBe('confirm success');
  });

  it('devrait retourner la classe modifiée avec "disabled" si hasErrors est vrai', () => {
    const result = setConfirmClassModifier(true);
    expect(result).toBe('confirm disabled');
  });

  it('devrait retourner la classe modifiée avec une classe personnalisée si fournie, et hasErrors est vrai', () => {
    const result = setConfirmClassModifier(true, 'customClass');
    expect(result).toBe('customClass disabled');
  });

  it('devrait retourner la classe modifiée avec une classe personnalisée si fournie, et hasErrors est faux', () => {
    const result = setConfirmClassModifier(false, 'customClass');
    expect(result).toBe('customClass success');
  });

  it('devrait retourner la classe modifiée avec "disabled" si aucune classe n\'est fournie, et hasErrors est vrai', () => {
    const result = setConfirmClassModifier(true, undefined);
    expect(result).toBe('confirm disabled');
  });

  it('devrait retourner la classe modifiée avec "success" si aucune classe n\'est fournie, et hasErrors est faux', () => {
    const result = setConfirmClassModifier(false, undefined);
    expect(result).toBe('confirm success');
  });
});
