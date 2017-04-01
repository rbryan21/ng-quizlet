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

router.get('/set/:id', (req, res, next) => {
    var id = req.params.id;
    FlashcardSet.getFlashcardSetById(id, function(err, incomingFlashcardSet) {
        if (err) throw err;
        if (incomingFlashcardSet.length <= 0) {
            res.json({success: false, msg: 'No flashcard set found with id ' + id});
        } else {
            res.json({success: true, flashcardSet : incomingFlashcardSet});
        }

    });
});

// Get flash card sets
router.get('/:email', (req, res, next) => {
    var email = req.params.email;
    var flashcardSets = [];
    FlashcardSet.getFlashcardSetsForUser(email, function(err, incomingFlashcardSets) {
        if (err) throw err;
        if (incomingFlashcardSets.length <= 0) {
            res.json({success: false, msg:'No flashcard sets created'});
        } else {
            incomingFlashcardSets.forEach(function(incomingSet) {
                flashcardSets.push(incomingSet);
            });
            res.json({success: true, flashcardSets : flashcardSets});
        }

    });
});

// Delete flash card sets
router.delete('/flashcardset', (req, res, next) => {

});

module.exports = router;