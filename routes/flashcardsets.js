const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const FlashcardSet = require('../models/flashcardset');

// Add new flashcard set
router.post('/create', (req, res, next) => {
    
    var newFlashcardSet = new FlashcardSet({
        name: req.body.subject,
        author: {
            author_id : req.body.author.id,
            email: req.body.author.email
        },
        flashcards: req.body.flashset 
    });

    FlashcardSet.addFlashcardSet(newFlashcardSet, (err, set) => {
        if (err) {
            res.json({success: false, msg:'Flashcard set unsuccessfully added.'});
        } else {
            res.json({success: true, msg:'Flashcard set successfully added!'});
        }
    });

});

// Update flash card set
router.put('/flashcardset', (req, res, next) => {

});

// Get flash card sets
router.get('/flashcardset', (req, res, next) => {

});

// Delete flash card sets
router.delete('/flashcardset', (req, res, next) => {

});

module.exports = router;