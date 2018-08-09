var express = require('express');
var router = express.Router();
var Controller = require("../controllers/heroesController");

const controller = new Controller();

router.get('/', controller.getAllHeroes);
router.post('/', controller.createHero);
router.get('/:_id', controller.getHero);
router.put('/', controller.updateHero);
router.delete('/:_id', controller.deleteHero);

module.exports = router;
