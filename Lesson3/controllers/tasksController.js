var tasksModel = require("../models/tasks");

module.exports = class tasksController {
    
    render (req, res, next) {
        res.render('tasks', { title: 'Tasks1' });
    }
    
    create (req, res, next) {
     
       var model = new tasksModel({
            title: "Test task 1",
            description: "Test description 1"
        });
  
        
        model.save((err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('Model created!');
            }
        })
        
        res.render('tasks', { title: 'Model saved' });
    }
    
    retrieve (req, res, next) {
        var allTasks, output;
        
        tasksModel.find({}, 'title description', (err, tasks) => {
            if (err) {
                console.log(err);
            } else {
                console.log(tasks);
                tasks.forEach( (task) => {
                    output += 'name: ' + task.title + ', description: ' + task.description + ';' ;
                });
           
                res.render('tasks', { title: 'All Tasks', data: output}); 
            }
        });
    }
    
    update (req, res, next) {
        tasksModel.find({}, 'title description', (err, tasks) => {
            if (err) {
                console.log(err);
            } else {
                tasks.forEach( (task) => {
                    task.title = task.title + 'z';
                    task.save( (err) => {
                         if (err) {
                            console.log(err);
                         }
                    })
                });
           
                res.render('tasks', { title: 'Tasks updated'}); 
            }
        });
    }
    
    delete (req, res, next) {
        tasksModel.remove({}, (err) => {
            if (err) {
                console.log(err);
            } 
           
            res.render('tasks', { title: 'Tasks deleted'}); 
            
        });
    }
};
