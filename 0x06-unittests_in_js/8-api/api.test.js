const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
  const API_URL = 'http://localhost:7865';

  it('GET / returns correct response', (done) => {
    request.get(`${API_URL}/`, (err, res, body) => {
      expect(res).to.have.property('statusCode', 200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

