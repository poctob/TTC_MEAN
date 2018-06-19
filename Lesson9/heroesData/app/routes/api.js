var express = require('express');
const HeroesController = require('../controllers/heroesController');
var router = express.Router();

const controller = new HeroesController();
/* GET home page. */
router.get('/', controller.retrieve);
router.get('/search', controller.search);
router.get('/:_id', controller.find);
router.post('/', controller.create);
router.put('/', controller.update);
router.delete('/:_id', controller.delete);

module.exports = router;
