var express = require('express');
const TasksController = require('../controllers/tasksController');
var router = express.Router();

const controller = new TasksController();
/* GET home page. */
router.get('/', controller.retrieve);
router.get('/create', controller.create);
router.get('/update', controller.update);
router.get('/delete', controller.delete);

module.exports = router;
