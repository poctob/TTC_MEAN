var express = require('express');
var router = express.Router();
var DogsController = require("../controllers/dogsController");
var CatsController = require("../controllers/catsController");
var PetsController = require("../controllers/petsController");

const dogsController = new DogsController();
const catsController = new CatsController();
const petsController = new PetsController();

router.get('/', petsController.getAll);
router.get('/dogs', petsController.getDog);
router.get('/cats', petsController.getCat);

module.exports = router; 
