const path = require('path');
const express = require('express');
const router = require('./router/router.js');
const bodyParser = require('body-parser');
const axios = require('axios');
const db = require('./db/schema.js');
const dbConnection = require('./db/connection.js');

// Use express and export it
const app = express();
module.exports.app = app;

// Check to see if there is a port environment variable or just use port 4040 instead
module.exports.NODEPORT = process.env.PORT || 4040;

app.use('/api', router);

// Use body-parser for parsing JSON and URLencoded body data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

axios.post('/employees', {
      firstName: 'Tom',
      lastName: 'Cruise',
      region:  'Austin',
      group: 'sales',
    })
    .then(response => {
      console.log('User posted! ',response);
    })
    .catch(error => {
      console.log('Error while posting user: ',error);
    });

app.post('/employees', function(req, res) {
    console.log('here')
    var data = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        region: req.body.region,
        group: req.body.description
    };

    db.User.findOne(data)
        .exec(function(err, thisPerson) {
            if (!thisPerson) {
                var newPerson = new db.User({
                    firstName: 'Tom',
				      lastName: 'Cruise',
				      region:  'Austin',
				      group: 'sales',
                });
                newPerson.save(function(err, newPerson) {
                    if (err) {
                        res.status(500).send(err);
                    } else {
                        res.send("Person was added")
                    }
                });
            } else {
                res.send("Person already exists");
            }
        })
});

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


