const db = require('./db');

const User = db.sequelize.define('User', {
    name: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: db.Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: db.Sequelize.STRING,
        allowNull: false
    }
});

// Attention: only uncomment this when syncronizing the database:
//User.sync({ force: true })

module.exports = User;