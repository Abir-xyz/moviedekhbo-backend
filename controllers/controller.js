const WatchList = require('../models/schema');

// Add to watchlist
const addToWatchList = async (req, res) => {
  try {
    const newItem = new WatchList(req.body);
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get watchlist by userId
const getWatchList = async (req, res) => {
  try {
    const userId = req.params.userId;
    const list = await WatchList.find({ userId });
    res.status(200).json(list);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete watchlist item by item id
const deleteListItem = async (req, res) => {
  try {
    await WatchList.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Item removed from watchlist' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addToWatchList,
  getWatchList,
  deleteListItem,
};
