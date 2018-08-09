var Hero = require("../models/hero");

module.exports = class HeroesController {
    
    async getAllHeroes(req, res, next) {
        
        try {
            let data = await Hero.find({});
            res.send(data);
        } catch(err) {
            console.error(err);
            res.status(500);
        }
    }
    
    async createHero (req, res, next) {
        let hero = new Hero();
        hero.name = req.body.name;
        
        try
        {
            let result = await hero.save();
            res.send(hero);
        } catch (err) {
            console.error(err);
            res.status(500);
        }
    }
    
    async getHero (req, res, next) {
        try {
            let data = await Hero.findById(req.params._id);
            res.send(data);
        } catch (err) {
            console.error(err);
            res.status(500);
        }
    }
    
    async updateHero (req, res, next) {
        try {
            let data = await Hero.findById(req.body._id);
            data.name = req.body.name;
            let result = await data.save();
            res.send(data);
        } catch (err) {
            console.error(err);
            res.status(500);
        }
    }
    
    async deleteHero (req, res, next) {
        try {
            let result = await Hero.remove({_id: req.params._id});
            res.send({id: req.params._id});
        } catch (err) {
            console.error(err);
            res.status(500);
        }
    }
};