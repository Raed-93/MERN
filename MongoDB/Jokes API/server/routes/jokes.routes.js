const jokesController = require('../controllers/jokes.controllers');

module.exports = app => {
    app.get('/api/jokes', jokesController.findJokes);
    app.get('/api/jokes/:id', jokesController.findOneJoke);
    app.post('/api/jokes', jokesController.createJoke);
    app.patch('/api/jokes/:id', jokesController.updateJoke);
    app.delete('/api/jokes/:id', jokesController.deleteJoke);
}