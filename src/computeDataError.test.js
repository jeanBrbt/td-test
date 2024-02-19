import { computeDataError } from './computeDataError.js';
import { setResponseError } from './setResponseError.js';



jest.mock('./setResponseError', () => ({
  STATUS_HTTP_MESSAGES: {
    404: 'Not Found',
    500: 'Internal Server Error',
  },
}));

const mockResponse = (status, data) => ({
  status,
  json: async () => data,
});

describe('computeDataError', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });


});
