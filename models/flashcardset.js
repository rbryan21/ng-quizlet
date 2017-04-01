const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// Flashcard Schema
const FlashcardSetSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        email: {
            type: String,
            required: true
        },
        author_id: {
            type: String, 
            required: true
        }
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

module.exports.getFlashcardSetsForUser = function(email, callback) {
    const query = {"author.email": email};
    FlashcardSet.find(query, callback);
}

module.exports.addFlashcardSet = function(newFlashcardSet, callback) {
    newFlashcardSet.save(callback);
}

module.exports.updateFlashcardSet = function(flashcardSet, callback) {

}

module.exports.deleteFlashcardSet = function(flashcardSet, callback) {
    
}

