const app = require('../app.js');
const request = require('supertest').agent(app);

/**
 * Testing get the frontpage request
 */
describe('GET /', () =>{

    // after((done) =>{
    //     app.close();
    //     done();
    // });

    it('respond with welcome-page.ejs page', (done) =>{

        request
            .get('/')
            .set('Accept', 'application/json')
            .expect('Content-Type', /html/)
            .expect(200, done);
    });
});

/**
 * Testing get the add-character page request
 */

describe('GET /add-character', () =>{

    // after((done) =>{
    //     app.destroy();
    //     done();
    // });

    it('respond with add-character.ejs page', (done) =>{ 
        request
            .get('/add-character')
            .set('Accept', 'application/json')
            .expect('Content-Type', /html/)
            .expect(200, done)
    });
});

/**
 * Testing get the character page request
 */
describe('GET /characters', () =>{
    it('respond with user-characters.ejs page', (done) =>{

        request
            .get('/characters')
            .set('Accept', 'application/json')
            .expect('Content-Type', /html/)
            .expect(200)
            .end(done);
    });
});