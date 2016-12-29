//This is schema for pesonal page information
import mongoose from 'mongoose';

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var PersonalPage = mongoose.model('PersonalPage', new Schema({
	id: ObjectId,
	firstName: String,
	lastName: String,
	email: {type: String, unique: true},
    age: Number,
    avatarUrl: String,
    headerUrl: String,
    owner: String,
    friends: [String]
}));

export default PersonalPage;