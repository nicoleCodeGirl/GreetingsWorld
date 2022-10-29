const mocha = require('mocha');
const assert = require('assert');

// Describe tests
describe('This is a test', function () {
  
  // Create tests
  it('connects to mongo', function () {

    let mongoose = require("mongoose");

    mongoose.connect('mongodb://localhost/testing', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    mongoose.connection.once('open', function () {
      console.log('Connection has been made, now make fireworks...');
    }).on('error', function (error) {
      console.log('Connection error:', error);
    });
  })

})