var express = require('express'); //now we have access to the entire express api

// Create our app
var app = express();

app.use(express.static('public')); //which folder you wanna use!!!!!

app.listen(3000, function(){
  console.log('Express server is up on port 3000');
});
