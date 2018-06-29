var heroesModel = require("../models/heroes");
var Repository = require("../repositories/heroesRepository");
const { check, validationResult } = require('express-validator/check');

module.exports = class herosController {
    
    render (req, res, next) {
        res.render('heros', { title: 'heroes1' });
    }
    
    create (req, res, next) {
     
       var model = new heroesModel(req.body);
  
        model.save((err) => {
            if (err) {
                console.log(err);
                 res.sendStatus(500);
            } else {
                console.log('Model created!');
                res.send(model);
            }
        })
    }
    
    async retrieve (req, res, next) {
       
        var repository = new Repository();
        await repository.retrieve();
        
        if(repository.error) {
            res.sendStatus(500);
        } else {
            console.log("got data: " + repository.data);
            res.send(repository.data);
        }
     
    }
    
    find (req, res, next) {
       
        heroesModel.findById(req.params._id, 'name', (err, hero) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else {
                console.log(hero);
               
                res.send(hero);
            }
        });
    }
    
    search (req, res, next) {
       
        heroesModel.find({name: { "$regex": req.query.name, "$options": "i" }}, 'name', (err, heroes) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else {
                console.log(heroes);
               
                res.send(heroes);
            }
        });
    }
    
    update (req, res, next) {
        req.check('name', 'Name is too short')
        .isLength({ min: 5 });
        
        req.check('name', 'Invalid name')
        .custom(value => {
            if(value !== 'Superman') {
                return Promise.reject('Invalid name');
            }
        });
        
        var errors = req.validationErrors();
         if (errors) {
            res.status(412).send(errors);
            return;
        } 
        
        heroesModel.findById(req.body._id, 'name', (err, hero) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else {
                hero.name = req.body.name;
                
                hero.save((err) => {
                    if (err) {
                        console.log(err);
                         res.sendStatus(500);
                    } else {
                        console.log('Model created!');
                        res.send(hero);
                    }
                })
            }
        });
    }
    
    delete (req, res, next) {
        heroesModel.remove({_id: req.params._id}, (err) => {
            if (err) {
                console.log(err);
                 res.sendStatus(500);
            } else {
                 res.send({id: req.params._id});
            }
        });
    }
    
    validateCustomName(input) {
        if(input === 'Superman') {
            return Promise.reject('Invalid name');
        }
    }
};