const db = require('./db');

const Classes = db.sequelize.define('Classes', {
    id: {
        type: db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    scheduleId: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'Schedules',
            key: 'id'
        }
    },
    level: {
        type: db.Sequelize.ENUM('beginner', 'intermediate', 'advanced'),
        allowNull: false
    },
    maxStudents: {
        type: db.Sequelize.INTEGER,
        allowNull: false
    },
    enrolledStudents: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    status: {
        type: db.Sequelize.ENUM('active','inactive','full'),
        allowNull: false,
        defaultValue: 'active'
    }
});

// Attention: only uncomment this when syncronizing the table to the database:
//Classes.sync({ force: true })

module.exports = Classes;