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
    city: String,
    job: String,
    skype: String,
    avatarUrl: String,
    headerUrl: String,
    owner: {type: String, unique: true},
    posts: [], // add schema of post
    friends: [String]
}));

export default PersonalPage;