var mongoose = require("mongoose");

var petsSchema = new mongoose.Schema({
    type: String,
    name: String
});

module.exports = mongoose.model('Pets', petsSchema);
