import manageConfig from './manageConfig.js';
const API_URL = {
    BASE: 'base',
    GITHUB: 'github',
  };
  
const mockFetchAuthConfig = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer token123',
  },
  method: 'GET',
};

describe('manageConfig', () => {
  it('devrait retourner les mêmes configurations si apiName est API_URL.BASE', () => {
    const result = manageConfig(API_URL.BASE, mockFetchAuthConfig);
    expect(result).toEqual(mockFetchAuthConfig);
  });

  it('Api name différent', () => {
    const result = manageConfig(API_URL.GITHUB, mockFetchAuthConfig);
    expect(result).toEqual({ method: 'GET' });
  });



  it('devrait retourner un objet vide si fetchAuthConfig est vide', () => {
    const result = manageConfig(API_URL.BASE, {});
    expect(result).toEqual({});
  });


});
