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
router.get('/:email', (req, res, next) => {
    var email = req.params.email;
    var flashcardSets = [];
    FlashcardSet.getFlashcardSetsForUser(email, function(err, incomingFlashcardSets) {
        if (err) throw err;
        if (incomingFlashcardSets.length <= 0) {
            console.log('hi');
            return res.json({success: false, msg:'No flashcard sets created'});
        }
        incomingFlashcardSets.forEach(function(incomingSet) {
            flashcardSets.push(incomingSet);
        });
        return res.json({flashcardSets : flashcardSets});
    });
});

// Delete flash card sets
router.delete('/flashcardset', (req, res, next) => {

});

module.exports = router;