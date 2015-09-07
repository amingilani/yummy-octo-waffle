var mocha = require('mocha');
var should = require('should');
var request = require('request');

var telize = "http://www.telize.com/geoip/";
var localhost = "http://localhost:3000/";

describe('Connection', function(done) {

  it('Should return Karachi on looking up 119.63.142.23 at Telize.com', function(done) {
    request(telize + "119.63.142.23", function(err, res, body) {

      console.log(body);
      body = JSON.parse(body);
      body.city.should.equal("Karachi");

      done();
    });
  });
});

describe('Api Tests', function() {

  it('Should lookup MANUFACT', function(done) {
    request(localhost + "channels?l=61.730255,-12.057748", function(err, res, body) {
      body = JSON.parse(body);
      var company = body.result[0].company;
      company.should.equal("MANUFACT");
      done();
    });
  });

  it('Should return IP variable if fallback is checked from localhost',
    function(done) {
      request(localhost + "channels?l=badRequest", function(err, res, body) {
        ip = JSON.parse(body).ip;
        ip.should.exist();
        done();
      });
    });
});
