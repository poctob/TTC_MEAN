var heroesModel = require("../models/heroes");
var Repository = require("./repository");

module.exports = class herosRepository extends Repository{
    
    constructor() {
        super(heroesModel);
    }
};