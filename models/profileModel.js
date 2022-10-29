const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let Profile = mongoose.model('Profile', {
    name: { type: String, required: true },
    password: { type: String, required: true },
    createdAt: String,
    bio: String,
    profilePhoto: String

});

module.exports = Profile;