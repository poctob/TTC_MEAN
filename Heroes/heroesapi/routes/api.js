var express = require('express');
var router = express.Router();
var Controller = require('../controllers/heroesController');

const controller = new  Controller();

router.get('/', controller.retrieve);
router.get('/search', controller.search);
router.get('/:_id', controller.find);
router.post('/', controller.create);
router.put('/', controller.update);
router.delete('/:_id', controller.delete);

module.exports = router;