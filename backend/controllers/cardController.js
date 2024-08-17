const Card = require('../model/cardModel');

// Create a new card
const createCard = async (req, res) => {
    try {
      const { title, description } = req.body;
  
      // Check if title and description are provided
      if (!title || !description) {
        return res.status(400).json({ message: 'Title and description are required' });
      }
  
      // Check if a card with the same title already exists
      const existingCard = await Card.findOne({ title });
      if (existingCard) {
        return res.status(400).json({ message: 'Title already exists' });
      }
  
      // Create a new card
      const card = new Card({ title, description });
      await card.save();
  
      // Return the newly created card
      res.status(201).json(card);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  

// Get all cards
const getAllCards = async (req, res) => {
  try {
    const cards = await Card.find();
    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get cards by partial title match
const getCardsByPartialTitle = async (req, res) => {
    try {
      const { title } = req.params;
  
      if (!title) {
        return res.status(400).json({ message: 'Title is required' });
      }
  
      // Use regex for partial and case-insensitive matching
      const cards = await Card.find({ title: { $regex: title, $options: 'i' } });
  
      if (cards.length === 0) {
        return res.status(404).json({ message: 'No cards found' });
      }
  
      res.status(200).json(cards);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

module.exports = {
  createCard,
  getAllCards,
  getCardsByPartialTitle,
};
