var heroesModel = require("../models/heroes");

module.exports = class herosController {
    
    render (req, res, next) {
        res.render('heros', { title: 'heros1' });
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
    
    retrieve (req, res, next) {
       
        heroesModel.find({}, 'name', (err, heroes) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else {
                console.log(heroes);
               
                res.send(heroes);
            }
        });
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
};
