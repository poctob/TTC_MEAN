var mongoose = require("mongoose");

var booksSchema = new mongoose.Schema({
                title: String,
                author: String
            });
            
module.exports = mongoose.model('Books', booksSchema);