// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Star Wars Characters (DATA)
// =============================================================
var characters = [
  

{
"name": "neko",
"photo": "wwer",
"scores": [
2,
2,
2,
3,
2,
2,
2,
2,
2,
2
]
},
{
"name": "neko",
"photo": "aer",
"scores": [
2,
2,
2,
2,
3,
2,
2,
2,
3,
2
]
},
{
"name": "neko",
"photo": "aer",
"scores": [
2,
2,
2,
2,
3,
2,
2,
2,
3,
2
]
},
{
"name": "neko",
"photo": "aer",
"scores": [
2,
2,
2,
2,
3,
2,
2,
2,
3,
2
]
}
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/public/home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "/public/survey.html"));
});

// Get all characters
app.get("/friends", function(req, res) {
  res.json(characters);
});

// Search for Specific Character (or all characters) - provides JSON
app.get("/api/friends", function(req, res) {
  var chosen = req.params.characters;

  if (chosen) {
    console.log(chosen);

    for (var i = 0; i < characters.length; i++) {
      if (chosen === characters[i].routeName) {
        return res.json(characters[i]);
      }
    }
    return res.json(false);
  }
  return res.json(characters);
});

// Create New Characters - takes in JSON input
app.post("/api/new", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newcharacter = req.body;
  characters.push(newcharacter);
  newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

  console.log(newcharacter);

 

  res.json(newcharacter);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
