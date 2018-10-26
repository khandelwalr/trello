const express = require('express');
const router = express.Router();

const cardController = require('../controllers/card.controller');
const listController = require('../controllers/list.controller');

router.get('/cardData', cardController.getCardData);
router.get('/listData', listController.getListData);

router.post('/lists',listController.insertLists);
router.post('/cards',cardController.insertCards);

router.put('/update-card/:cardId',cardController.updateCards);
router.put('/update-cardState/:cardId',cardController.updateCardState);
router.put('/updateList/:listId',listController.updateListName);

router.delete('/removeCard/:cardId', cardController.deleteCards);

module.exports = router;

