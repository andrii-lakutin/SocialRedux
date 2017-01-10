import mongoose from 'mongoose';

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var Post = mongoose.model('Post', new Schema({
    id : ObjectId,
    date  : String,
    msg   : String,
    likes : Number,
    ownerId: String,
    ownerNameAndLastName: String
}));

export default Post;