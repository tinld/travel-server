const sequelize = require('sequelize');
const mySequel = require('../utils/sequelize');


const user = mySequel.define('user', {
    id:{
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    fullname:{
        type: sequelize.STRING(45),
        allowNull: false,
    },
    email:{
        type: sequelize.STRING(45),
        allowNull: false
    },
    password:{
        type: sequelize.STRING(128),
        allowNull: false
    },
    createdAt: {
        type: sequelize.DATE,
        allowNull: true,
        defaultValue: sequelize.NOW
    },
    updatedAt:{
        type: sequelize.DATE,
        allowNull: true,
        defaultValue: sequelize.NOW
    }
})

module.exports = user;

