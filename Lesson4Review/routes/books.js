var express = require('express');
const BooksController = require('../controllers/booksController');
var router = express.Router();

const controller = new BooksController();
/* GET home page. */
router.get('/', controller.retrieve);
router.get('/create', controller.create);
router.get('/update', controller.update);
router.get('/delete', controller.delete);

module.exports = router;