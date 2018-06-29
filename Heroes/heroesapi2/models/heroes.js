var mongoose = require("mongoose");

var heroesSchema = new mongoose.Schema({
                name: String
            });
            
module.exports = mongoose.model('Heroes', heroesSchema);