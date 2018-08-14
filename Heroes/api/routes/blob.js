var express = require('express');
var router = express.Router();
var Controller = require("../controllers/blobController");

const controller = new Controller();

router.get('/write', controller.writeFile);
router.get('/read', controller.readFile);

module.exports = router;
