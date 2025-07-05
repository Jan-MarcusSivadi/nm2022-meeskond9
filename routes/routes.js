const express = require('express');
const router = express.Router();
const { getIndex, getSocketInstanceID, getGame, getLearnGame, getQuestions, getABC, getKKK } = require("../controllers/routesController");

// Main page
router.get('/', getIndex)

router.get('/game', getGame)

router.get('/questions', getQuestions)

// Chatbot API
router.get('/api/chatbot', getSocketInstanceID)

router.get('/learngame', getLearnGame)

router.get('/abc', getABC)

router.get('/kkk', getKKK)

module.exports = router