module.exports = function(app){
    require('./routes/user.route')(app)
    require('./routes/message.route')(app)
}