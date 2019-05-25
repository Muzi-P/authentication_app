const mongoose = require('mongoose');

const UserSchema = new mangoose.Schema({
    name: {
        type: String,
        require: True
    },

    email: {
        type: String,
        require: True
    },

    password: {
        type: String,
        require: True
    },

    date: {
        type: Date,
        default: Date.now
    },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;