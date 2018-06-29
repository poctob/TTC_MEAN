var heroesModel = require("../models/heroes");

module.exports = class heroesRepository {
    
    constructor () {
        this.error = null;
        this.data = null;
    }
    
    async create (hero) {
        try
        {
            let data =  await heroesModel.create(hero);
            console.log('Model created!');
            console.log('Repository data: ' + data );
            return data;
        } catch (err) {
            console.log(err);
            this.error = err;
        }
    }
    
    async retrieve () {
        
        await heroesModel.find({}, (err, data) => {
        if (err) {
                console.log(err);
                this.error = err;
            } else {
                console.log('Retrieved model!');
                this.data = data;
                console.log('Repository data: ' + this.data );
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
    
    async delete (id) {
        console.log("Trying to delete model:" + id);
        
        try {
            await heroesModel.remove({ _id: id});
        } catch ( err ) {
            console.log(err);
            this.error = err;
        }
    }
    
    validateCustomName(input) {
        if(input === 'Superman') {
            return Promise.reject('Invalid name');
        }
    }
};