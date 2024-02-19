import { setResponseError, STATUS_HTTP, STATUS_API, STATUS_HTTP_MESSAGES } from './setResponseError.js';

const mockResponse = (status, anomaly = {}) => ({
  status,
  anomaly,
});

describe('setResponseError', () => {
  it('devrait retourner un objet vide si le statut n\'est pas un avertissement ou une erreur', () => {
    const response = mockResponse(STATUS_HTTP.SUCCESS);
    const result = setResponseError({ response });
    expect(result).toEqual({});
  });

  it('devrait retourner un objet avec les propriétés correctes pour un avertissement', () => {
    const response = mockResponse(STATUS_API.WARNING, { label: 'Avertissement', detail: 'Détail de l\'avertissement' });
    const result = setResponseError({ response });
    expect(result).toEqual({
      ...response.anomaly,
      label: 'Avertissement',
      detail: 'Détail de l\'avertissement',
      type: 'danger',
      iconName: 'alert',
    });
  });

  it('devrait retourner un objet avec les propriétés correctes pour une erreur', () => {
    const response = mockResponse(STATUS_API.ERROR, { label: 'Erreur', detail: 'Détail de l\'erreur' });
    const result = setResponseError({ response });
    expect(result).toEqual({
      ...response.anomaly,
      label: 'Erreur',
      detail: 'Détail de l\'erreur',
    });
  });

  it('devrait utiliser les messages par défaut si les propriétés ne sont pas définies', () => {
    const response = mockResponse(STATUS_API.ERROR);
    const result = setResponseError({ response });
    expect(result).toEqual({
      label: STATUS_HTTP_MESSAGES[STATUS_API.ERROR],
      detail: '',
    });
  });



  it('devrait retourner un objet vide si le statut n\'est pas défini', () => {
    const response = mockResponse(undefined, { label: 'Erreur', detail: 'Détail de l\'erreur' });
    const result = setResponseError({ response });
    expect(result).toEqual({});
  });
});
