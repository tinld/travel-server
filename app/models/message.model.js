const sequelize = require('sequelize');
const mySequel = require('../utils/sequelize');

const message = mySequel.define('message', {
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    userId: {
        type: sequelize.INTEGER,
        allowNull: false
    },
    question:{
        type: sequelize.STRING(1024),
        allowNull: false
    },
    text: {
        type: sequelize.STRING(2048),
        allowNull: false
    },
    image: {
        type: sequelize.STRING(128),
        allowNull: true
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

module.exports = message;