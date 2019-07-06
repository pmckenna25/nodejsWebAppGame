const request = require('supertest');
const app = require('../app');

/**
 * Testing get the frontpage request
 */
describe('GET /', () => {
  it('respond with welcome-page.ejs page', done => {
    request(app.listen())
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /html/)
      .expect(200)
      .end(done);
  });
});

/**
 * Testing get the add-character page request
 */

describe('GET /add-character', () => {
  it('respond with add-character.ejs page', done => {
    request(app.listen())
      .get('/add-character')
      .set('Accept', 'application/json')
      .expect('Content-Type', /html/)
      .expect(200)
      .end(done);
  });
});

/**
 * Testing get the characters page request
 */
describe('GET /characters', () => {
  it('respond with characters.ejs page', done => {
    request(app.listen())
      .get('/characters')
      .set('Accept', 'application/json')
      .expect('Content-Type', /html/)
      .expect(200)
      .end(done);
  });
});
