const express = require('express');
const router = express.Router();
const {
  createCard,
  getAllCards,
  getCardsByPartialTitle,
} = require('../controllers/cardController');

router.post('/cards', createCard);
router.get('/cards', getAllCards);
router.get('/cards/:title', getCardsByPartialTitle);

module.exports = router;
