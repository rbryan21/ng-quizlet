const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const FlashcardSet = require('../models/flashcardset');

// Add new flashcard set
router.post('/create', (req, res, next) => {
    var name = req.body.subject;
    var flashcards = req.body.flashset;
    console.log('First card', flashcards[0]);
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