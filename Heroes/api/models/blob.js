var mongoose = require("mongoose");

var blobSchema = new mongoose.Schema({
    name: String
});

module.exports = mongoose.model('Blob', blobSchema);