const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User Schema
const FlashcardSetSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    flashcards: [{
        term: {
            type: String,
            required: true
        },
        definition: {
            type: String,
            required: true
        }
    }]
});

const FlashcardSet = module.exports = mongoose.model('FlashcardSet', FlashcardSetSchema);

module.exports.getFlashcardSetById = function(id, callback) {
    FlashcardSet.findById(id, callback);
}

module.exports.getFlashcardSetsForEmail = function(username, callback) {
    const query = {email: username};
    FlashcardSet.find(query, callback);
}

module.exports.addFlashcardSet = function(newFlashcardSet, callback) {

}

module.exports.updateFlashcardSet = function(flashcardSet, callback) {

}

module.exports.deleteFlashcardSet = function(flashcardSet, callback) {
    
}

