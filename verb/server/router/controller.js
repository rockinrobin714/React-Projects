const db = require('../db/schema.js');

// // Returns an object with a key of data
// const buildResObj = function (data) {
//   return {
//     data: data
//   }
// }

module.exports = {

//   employees: {
//     all: (req, res) => {
//       db.User.findOne({fb_id: req.user.id}).exec()
//         .then((user) => {
//           res.status(200).send(user);
//         })
//         .catch((err) => {
//           console.error(err);
//           res.sendStatus(400);
//         })
//     },
//     it: (req, res) => {
//       if (req.user.id) {
//         res.send(true);
//       } else {
//         res.send(false);
//       }
//     },
//     sales: (req, res) => {
//       req.session.destroy();
//       res.redirect('/');
//     },
		// support: (req, res) => {
//       req.session.destroy();
//       res.redirect('/');
//     }
//   },

  // searchQuery: {
  //   get: (req, res) => {
//       db.Group.find().exec()
//         .then((groups) => {
//           let response = buildResObj(groups);
//           res.status(200).send(response);
//         })
//         .catch((err) => {
//           console.error(err);
//           res.sendStatus(400);
//         })
//     },
//     // Group controller functions for GET
//     post: (req, res) => {
//       // Look in the database to see if there is a Group with the given name already
//       db.Group.findOne({name: req.body.data.groupName}).exec()
//       .then((data) => {
//         // If we don't get any data, add the request body into the database
//         if(!data) {
//           new db.Group({name: req.body.data.groupName}).save()
//           .then((data) => {
//             // Send a 201 status that it was completed
//             res.sendStatus(201);
//           })
//           // Catch the error and log it in the server console
//           .catch((err) => {
//             console.error(err);
//             res.sendStatus(400);
//           })
//         }
//         else {
//           // Send a 401 status and a message that the group is already added the database
//           res.status(401).send('Group is already in the database.')
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//       })
//     }
//   },

  employees: {
    post: (req, res) => {
    	console.log("the request is", req.body)
      new db.User({
        firstName: 'Tom',
			lastName: 'Cruise',
			region: 'Austin',
			group: 'Sales'
      }).save()
      .then((data) => {
        res.status(201).send(data);
      })
      .catch((err) => {
        res.sendStatus(400)
      })
    }
  },

//   request: {
//     // Request controller functions for POST
//     //Data is posted in req.body
//     post: (req, res) => {

//       db.Order.findOneAndUpdate(
//          {_id:req.body.data.volunteerId},
//          {$push: { requests:{user_id: req.body.data.username, picture: req.body.data.picture, text:req.body.data.text} } }
//         )
//       .then((data) => {
//         //console.log('Data sent to DB.', data);
//         res.status(201).send(data);
//       })
//       .catch((err) => {
//         res.sendStatus(400)
//       })
//       //console.log('Request POST', req);

//    }
// }, 

//   logout: {
//     get: (req, res) => {
//       res.sendStatus(200); 

//      }
//    },  
  
}  