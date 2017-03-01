const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

let db = {};

const UserSchema = new Schema ({
	//mongoose will automatically create a unique id, so no need to manually create one
	firstName: String,
	lastName: String,
	region: String,
	group: String
});


db.User = mongoose.model('user', UserSchema);

module.exports = db;