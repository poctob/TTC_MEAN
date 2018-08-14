var mongoose = require('mongoose');
var conn = mongoose.connection;
var fs = require('fs');
 
var Grid = require('gridfs-stream');
Grid.mongo = mongoose.mongo;

module.exports = class BlobController {
    
    async writeFile(req, res, next) {
        
        try {
            let gfs = Grid(conn.db);
            var writestream = gfs.createWriteStream({
                filename: 'g.gif'
            });
            
            fs.createReadStream('./files/giphy.gif').pipe(writestream);
            
            writestream.on('close', function (file) {
     
                console.log(file.filename + 'Written To DB');
            });
            
            res.send("OK");
        } catch(err) {
            console.error(err);
            res.status(500);
        }
    }
    
    async readFile (req, res, next) {
        try
        {
            var fs_write_stream = fs.createWriteStream('./files/g1.gif');
            let gfs = Grid(conn.db);
            var readstream = gfs.createReadStream({
                     filename: 'g.gif'
                });
            readstream.pipe(fs_write_stream);
            fs_write_stream.on('close', function () {
                console.log('file has been written fully!');
                
                var img = fs.readFileSync('./files/g1.gif');
                res.writeHead(200, {'Content-Type': 'image/gif' });
                res.end(img, 'binary');
            });
                
           
           
        } catch (err) {
            console.error(err);
            res.status(500);
        }
    }
    
 
};