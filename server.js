const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/mock-wayfarer'));

app.get('/*', function(req,res) {

  res.sendFile(path.join(__dirname+'/dist/mock-wayfarer/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

//had to link angular cli to npm
