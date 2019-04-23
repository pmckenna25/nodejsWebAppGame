const app = require('../app')
const request = require('supertest');

app.server = app.listen(8080);

/**
 * Testing get the frontpage request
 */
describe('GET /', () =>{

    it('respond with welcome-page.ejs page', (done) =>{

        request(app.server)
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

describe('GET /add-character', () =>{

    it('respond with add-character.ejs page', (done) =>{ 
        request(app.server)
            .get('/add-character')
            .set('Accept', 'application/json')
            .expect('Content-Type', /html/)
            .expect(200)
            .end(done);
    });
});

/**
 * Testing get the character page request
 */
describe('GET /characters', () =>{
    
    it('respond with user-characters.ejs page', (done) =>{
        request(app.server)
            .get('/characters')
            .set('Accept', 'application/json')
            .expect('Content-Type', /html/)
            .expect(200)
            .end(done);
    });
});