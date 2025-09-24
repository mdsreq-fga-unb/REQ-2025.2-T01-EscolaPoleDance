const db = require('./db');

const Schedules = db.sequelize.define('Schedules', {
    id: {
        type: db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    classId: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'Classes',
            key: 'id'
        }
    },
    dayOfWeek: {
        type: db.Sequelize.ENUM('monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'),
        allowNull: false
    },
    startTime: {
        type: db.Sequelize.TIME,
        allowNull: false
    },
    endTime: {
        type: db.Sequelize.TIME,
        allowNull: false
    }
});

// Attention: only uncomment this when syncronizing the table to the database:
//Schedules.sync({ force: true })

module.exports = Schedules;