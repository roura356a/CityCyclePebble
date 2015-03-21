var UI = require('ui');
var ajax = require('ajax');

// Create a Card with title and subtitle
var card = new UI.Card({
  title:'CityCycle =)',
  subtitle:'Fetching...'
});

// Display the Card
card.show();

// Construct URL
var stationID = '16';
var URL = 'http://albertoroura.com/citycicle/?station=' + stationID;

// Make the request
ajax(
  {
    url: URL,
    type: 'json'
  },
  function(data) {
    // Success!
    console.log("Successfully fetched station data!");

    // Extract data
    var available = data.available;
    var total = data.total;

    // Show to user
    card.subtitle("Station " + stationID);
    card.body(available + " of " + total + " available");
  },
  function(error) {
    // Failure!
    console.log('Failed fetching station data: ' + error);
  }
);