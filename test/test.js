const request = require('supertest');
const app = require('../app.js');

/**
 * Testing get the frontpage request
 */
describe('GET /', () =>{
    it('respond with welcome-page.ejs page', (done) =>{

        request(app)
            .get('/')
            .set('Accept', 'application/json')
            .expect('Content-Type', /html/)
            .expect(200, done);
    })
});

/**
 * Testing get the character page request
 */
describe('GET /characters', () =>{
    it('respond with user-characters.ejs page', (done) =>{

        request(app)
            .get('/characters')
            .set('Accept', 'application/json')
            .expect('Content-Type', /html/)
            .expect(200, done);
    })
});

/**
 * Testing get the add-character page request
 */
describe('GET /add-character', () =>{
    it('respond with add-character.ejs page', (done) =>{

        request(app)
            .get('/add-character')
            .set('Accept', 'application/json')
            .expect('Content-Type', /html/)
            .expect(200, done);
    })
});