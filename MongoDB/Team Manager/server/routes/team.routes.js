const TeamController = require('../controllers/team.controller');
module.exports = function(app){
    app.get('/api', TeamController.index);
}

