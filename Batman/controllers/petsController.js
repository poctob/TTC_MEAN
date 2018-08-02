var Pet = require("../models/pet");

module.exports = class PetsController {
    
  getAll (req, res, next) {
      res.send('This is Pets Controller!');
  }
  
  getCat (req, res, next) {
     let cat = new Pet();
     cat.type = 'cat';
     res.send('Here is your cat. Its name is ' + cat.name);
  }
  
  getDog (req, res, next) {
     let dog = new Pet();
     dog.type = 'dog';
     res.send('Here is your dog. Its name is ' + dog.name);
  }
    

}