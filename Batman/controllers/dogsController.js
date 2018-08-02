module.exports = class DogsController {
    
  getAll (req, res, next) {
      res.send('This is Dog Router!');
    }
}