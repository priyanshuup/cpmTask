import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

// Your schema definition
const userSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    jobTitle: String,
    ecode: String,
    phone: Number,
    email: String,
});

// // Initialize auto-increment
// autoIncrement.initialize(mongoose.connection);

// // Add the plugin to your schema
// userSchema.plugin(autoIncrement.plugin, {
//     model: 'user',  // The model name that you want to apply the plugin to
//     field: '_id',    // The field that you want to auto-increment
//     startAt: 1,      // The starting value for the counter
//     incrementBy: 1    // The increment value
// });

// Create the user model
const User = mongoose.model('user', userSchema);

export default User;
