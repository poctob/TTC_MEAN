var booksModel = require("../models/books");

module.exports = class tasksController {
    
    render (req, res, next) {
        res.render('books', { title: 'Books' });
    }
    
    create (req, res, next) {
     
       var model = new booksModel({
            title: "Test book",
            author: "Bill Gates"
        });
  
        
        model.save((err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('Model created!');
            }
        })
        
        res.render('books', { title: 'Model saved' });
    }
    
    retrieve (req, res, next) {
        var allTasks, output;
        
        booksModel.find({}, 'title author', (err, books) => {
            if (err) {
                console.log(err);
            } else {
                console.log(books);
                books.forEach( (book) => {
                    output += 'title: ' + book.title + ', author: ' + book.author + ';' ;
                });
           
                res.render('books', { title: 'All Books', data: output}); 
            }
        });
    }
    
    update (req, res, next) {
        booksModel.find({}, 'title author', (err, books) => {
            if (err) {
                console.log(err);
            } else {
                books.forEach( (book) => {
                    book.title = book.title + 'z';
                    book.save( (err) => {
                         if (err) {
                            console.log(err);
                         }
                    })
                });
           
                res.render('books', { title: 'Books updated'}); 
            }
        });
    }
    
    delete (req, res, next) {
        booksModel.remove({}, (err) => {
            if (err) {
                console.log(err);
            } 
           
            res.render('books', { title: 'Books deleted'}); 
            
        });
    }
};
