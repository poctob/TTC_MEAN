var express = require('express');
var router = express.Router();
const TasksController = require('../controllers/tasksController');

const controller = new TasksController();

/* GET home page. */
router.get('/', controller.retrieve);
router.get('/create', controller.create);
router.get('/update', controller.update);
router.get('/delete', controller.delete);

module.exports = router;
