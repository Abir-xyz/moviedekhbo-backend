const express = require('express');
const router = express.Router();

const {
  addToWatchList,
  getWatchList,
  deleteListItem,
} = require('../controllers/controller');

router.route('/').post(addToWatchList);
router.route('/:userId').get(getWatchList);
router.route('/:id').delete(deleteListItem);

module.exports = router;
