const db = require('./db');

const Users = db.sequelize.define('Users', {
    id: {
        type: db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    lastName: {
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
    },
    phoneNumber: {
        type: db.Sequelize.STRING,
        allowNull: true
    },
    role: {
        type: db.Sequelize.ENUM('user', 'admin'),
        allowNull: false,
        defaultValue: 'user'
    },
    status: {
        type: db.Sequelize.ENUM('active', 'inactive', 'pending'),
        allowNull: false,
        defaultValue: 'pending'
    },
    expires: {
        type: db.Sequelize.DATETIME,
        allowNull: true
    },
    classId: {
        type: db.Sequelize.INTEGER,
        allowNull: true,
        references: {
            model: 'Classes',
            key: 'id'
        }
    }
});

// Attention: only uncomment this when syncronizing the table to the database:
//Users.sync({ force: true })

module.exports = Users;