const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true // Enable uniqueness for the "title" field
    },
    year: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    DateOfUpload: {
        type: Date,
        default: Date.now()
    }
});

const moviesModel = mongoose.model('moviesModel', movieSchema);

module.exports = moviesModel;
