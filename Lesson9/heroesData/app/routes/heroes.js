var express = require('express');
const HeroesController = require('../controllers/heroesController');
var router = express.Router();

const controller = new HeroesController();
/* GET home page. */
router.get('/', controller.retrieve);
router.post('/', controller.create);
router.get('/update', controller.update);
router.get('/delete', controller.delete);

module.exports = router;
