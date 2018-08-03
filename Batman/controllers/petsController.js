var Pet = require("../models/pet");
var generateName = require("sillyname");

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
  
  createCat (req, res, next) {
    let cat = new Pet();
    cat.type = 'cat';
    
    console.log(req.body.RandomName);
    
    if( req.body.RandomName) {
      cat.name = generateName();
    } else {
      cat.name = req.body.Name;
    }
    
    cat.save();
    
    res.send('Cat created. Its name is ' + cat.name);
  }
  
  getAllCats(req, res, next) {
    Pet.find({type: 'cat'}, (err, data) => {
      if(err) {
        console.log(err);
        res.status(500);
      } else {
        res.send(data);
      }
    });
  }
  
  deleteAllCats(req, res, next) {
    Pet.remove({type: 'cat'}).exec( (err, data) => { });
    res.send("All cats have been deleted!");
  }
  
  createDog (req, res, next) {
    let cat = new Pet();
    cat.type = 'dog';
    if( req.body.RandomName) {
      cat.name = generateName();
    } else {
      cat.name = req.body.Name;
    }
    cat.save();
    
    res.send('Dog created. Its name is ' + cat.name);
  }
  
  getAllDogs(req, res, next) {
    Pet.find({type: 'dog'}, (err, data) => {
      if(err) {
        console.log(err);
        res.status(500);
      } else {
        res.send(data);
      }
    });
  }
  
  deleteAllDogs(req, res, next) {
    Pet.remove({type: 'dog'}).exec( (err, data) => { });
    res.send("All dogs have been deleted!");
  }  

}