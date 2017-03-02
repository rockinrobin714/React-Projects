const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const fetch = require('fetch');
const db = require('./db/schema.js');
const dbConnection = require('./db/connection.js');

// Use express and export it
const app = express();
module.exports.app = app;

// Check to see if there is a port environment variable or just use port 4040 instead
module.exports.NODEPORT = process.env.PORT || 4040;

// Use body-parser for parsing JSON and URLencoded body data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//TODO: write update employee route to update user's group
//TODO: seed DB with TONS of data
//TODO: write search employee route to find employees based on search query

// axios.put('http://localhost:4040/updateEmployee', { 
//       firstName: 'Bob',
//       lastName: 'Cruz',
//       region:  'Dallas',
//       group: 'sales'
//     })
//     .then(response => {
//       console.log('User posted!');
//     })
//     .catch(error => {
//       console.log('Error while posting user: ',error);
//     });

// db.scores.findOneAndUpdate
// app.put('/employees', function(req, res) {
// }
app.post('/employees', function(req, res) {
    var newPerson = new db.User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        region: req.body.region,
        group: req.body.description
    });
    newPerson.save(function(err, newPerson) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send("Person was added")
        }
    });
});
app.get('/employees', function (req,res){
	db.User.find().exec()
        .then((users) => {
          res.status(200).send(users);
        })
        .catch((err) => {
          console.error(err);
          res.sendStatus(400);
        })
})

// Serve the static client HTML files
app.use(express.static(path.join(__dirname, '/../app/public')));
// Serve the static client React files
app.use('/dist', express.static(path.join(__dirname, '/../app/public/dist')));
// Serve the node modules
app.use('/lib', express.static(path.join(__dirname, '/../node_modules')));

// Start the actual server listening on the port variable
app.listen(module.exports.NODEPORT, function (err) {
  // If there is an error log it
  if (err) { console.error(err); }
  // If there is not an error console log what port the server is running on
  else { console.log('Server running on port %s', module.exports.NODEPORT) }
})


