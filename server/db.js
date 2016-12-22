import mongoose from 'mongoose';

var db = mongoose.connect('mongodb://Lucky:veryhardpassword@ds061218.mlab.com:61218/social-redux');

export default db