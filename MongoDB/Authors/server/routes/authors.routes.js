const AuthorController = require('../controllers/authors.controller');
module.exports = function(app){
    app.get('/api', AuthorController.index);
    app.post('/api/author', AuthorController.createAuthor);
    app.get('/api/allauthors', AuthorController.getAllAuthor);
    app.get('/api/Author/:id', AuthorController.getAuthor);
    app.patch('/api/author/:id', AuthorController.updateAuthor);
    app.delete('/api/authors/:id', AuthorController.deleteAuthor);






}

