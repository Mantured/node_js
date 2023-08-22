const Sequalize = require('sequelize');

const sequelize = require('../util/database');

const User = sequelize.define('user', {
    id: {
        type: Sequalize.INTEGER,
        autoIncrement: true, 
        allowNull: false,
        primaryKey: true
    },
    firstname: Sequalize.STRING,
    lastname: Sequalize.STRING,
    email: Sequalize.STRING,
});

module.exports = User;