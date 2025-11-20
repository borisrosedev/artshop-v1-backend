import app from '../app.mjs';
import request from 'supertest';
import assert from "node:assert"

request(app)
  .get('/test')
  .expect('Content-Type', /json/)
  .expect('Content-Length', '18')
  .expect(200)
  .end(function(err, res) {
    assert.equal(res.body.message,"test");
    if (err) throw err;
    console.log("✅ test succeeded")
  });

// add routes to test


request(app)
  .get('/')
  .expect('Content-Type', /html/)
  // .expect('Content-Length', '18')
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;
    console.log("✅ test succeeded")
  });


