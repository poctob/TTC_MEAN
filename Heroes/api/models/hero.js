var mongoose = require("mongoose");

var heroSchema = new mongoose.Schema({
    name: String
});

module.exports = mongoose.model('Hero', heroSchema);