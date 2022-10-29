const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let Card = mongoose.model('Card', {
        greeting: String,
        imagePath: String,
        imageBlend: String,
        fontColour: String,
        textShadow: String,
        backgroundColour: String,
        borderStyle: String,
        borderColour: String,
        from: { type: String, required: true },
        to: { type: String, required: true },
        message: String,
        inbox: String,
        sent: String,
        date: String,
        replies: Array
});

module.exports = Card;