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

// Test GET /
request(app)
  .get('/')
  .expect('Content-Type', /html/)
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;
    console.log("✅ GET / test succeeded")
  });

// Test GET /gallery
request(app)
  .get('/gallery')
  .expect('Content-Type', /html/)
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;
    console.log("✅ GET /gallery test succeeded")
  });

// Test GET /artworks
request(app)
  .get('/artworks')
  .expect('Content-Type', /json/)
  .expect(200)
  .end(function(err, res) {
    assert.ok(res.body.deserializedArtworks);
    if (err) throw err;
    console.log("✅ GET /artworks test succeeded")
  });

// Test POST /artworks
request(app)
  .post('/artworks')
  .send({ name: "Test Art", author: "Test Artist", url: "https://example.com/test.jpg" })
  .expect('Content-Type', /json/)
  .expect(201)
  .end(function(err, res) {
    assert.equal(res.body.message, "Artwork created successfully!");
    assert.ok(res.body.artwork);
    if (err) throw err;
    console.log("✅ POST /artworks test succeeded")
  });

// Test POST /
request(app)
  .post('/')
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;
    console.log("✅ POST / test succeeded")
  });

// Test PUT /user
request(app)
  .put('/user')
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;
    console.log("✅ PUT /user test succeeded")
  });

// Test DELETE /user
request(app)
  .delete('/user')
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;
    console.log("✅ DELETE /user test succeeded")
  });


