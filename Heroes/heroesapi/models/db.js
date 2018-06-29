const mongoose = require("mongoose");

module.exports = class DB {
    
    constructor () {
        this.URI = 'mongodb://localhost/heroes';
        this.mongoose = mongoose;
        this.setUp();
    }
    
    setUp () {
        this.mongoose.connection.on('connected',  () => {
            console.log('Mongoose connected to ' + this.URI);
        });
        
        this.mongoose.connection.on('error', (err) => {
            console.log('Mongoose connection error: ' + err);
        });
        
        this.mongoose.connection.on('disconnected', () => {
            console.log('Mongoose disconnected');
        });
        
        process.once('SIGUSR2', () => {
            this.disconnect();
            process.kill(process.pid, 'SIGUSR2');
        })
        
        process.once('SIGINT', () => {
            this.disconnect();
            process.exit(0);
        })
        
        process.once('SIGTERM', () => {
            this.disconnect();
            process.exit(0);
        })
        
        
    }
    
    
    connect () {
        this.mongoose.connect(this.URI);
    }
    
    disconnect () {
        this.mongoose.connection.close();
    }
    
    
}