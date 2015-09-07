var express = require('express');
var router = express.Router();
var request = require('request');
var dummyData = require('./dummyData.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    message: 'Hello world!'
  });
});

router.get('/channels', function(req, res) {
  var lat = req.query.l.split(",")[0];
  var long = req.query.l.split(",")[1];
  var result = [];
  var ip = req.ip;
  console.log("lat: " + lat + " & long: " + long + ". And IP is " + ip);


  for (i = 0; i < dummyData.length; i++) {
    if (dummyData[i].latitude === lat && dummyData[i].longitude === long) {
      result.push(dummyData[i]);
    }
  }


  if (JSON.stringify(result) !== "[]") {
    res.json({
      "latitude": lat,
      "longitude": long,
      "result": result
    });
  } else {
    console.log("channel not found, reverting to geolocation");
    request("http://www.telize.com/geoip/" + ip, function(error, response, body) {
        res.send(body);
    });
  }


});

module.exports = router;
