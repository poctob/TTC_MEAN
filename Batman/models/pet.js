var generateName = require("sillyname");

module.exports = class Pet {
    
    constructor() {
        this.type = 'No type';
        this.name = generateName();
    }
}