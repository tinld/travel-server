const messageControl = require('../controllers/message.control');


module.exports = function(app){
    app.post('/api/v1/auth/messasge', messageControl.create);
    app.get('/api/v1/message', messageControl.getAll);
}