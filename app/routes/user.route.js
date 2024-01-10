const userControl = require('../controllers/user.control');


module.exports = function(app){
    app.post('/api/v1/auth/user', userControl.create);
    app.post('/api/v1/auth/user/login', userControl.signIn);
    app.put('/api/v1/auth/user', userControl.update);
}