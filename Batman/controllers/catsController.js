module.exports = class CatsController {
    
  getAll (req, res, next) {
      res.send('This is Cats Controller!');
    }
}