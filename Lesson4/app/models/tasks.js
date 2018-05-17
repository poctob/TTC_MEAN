var mongoose = require("mongoose");

var tasksSchema = new mongoose.Schema({
                title: String,
                description: String,
                dateCreated: Date,
                dateDue: Date,
                dateCompleted: Date
            });
            
module.exports = mongoose.model('Tasks', tasksSchema);