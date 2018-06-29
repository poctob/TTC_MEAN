module.exports = class Repository {
    
    constructor(model) {
        this.model = model;
        this.error = null;
        this.data = null;
    }
    
    create (input) {
     
       var model = new this.model(input);
  
        model.save((err) => {
            if (err) {
                return this.processError(err);
            } else {
                console.log('Model created!');
                return model;
            }
        })
    }
    
    async retrieve () {
        
        await this.model.find({}, (err, data) => {
        if (err) {
                this.processError(err);
            } else {
                this.data = data;
            }
        });
    }
    
    find (id) {
       
        this.model.findById(id, (err, data) => {
            if (err) {
                return this.processError(err);
            } else {
                console.log(data);
                return data;
            }
        });
    }
    
    update (id, input) {
        
        this.mdoel.findById(id, (err, data) => {
            if (err) {
                 return this.processError(err);
            } else {
                data = input;
                data._id = id;
                
                data.save((err) => {
                    if (err) {
                        return this.processError(err);
                    } else {
                        console.log('Model updated!');
                        return data;
                    }
                })
            }
        });
    }
    
    delete (id) {
        this.model.remove({_id: id}, (err) => {
            if (err) {
                 return this.processError(err);
            } else {
                 return {id: id};
            }
        });
    }
    
    processError(err) {
        console.log(err);
        this.error = err;
        return err;
    }
  
};