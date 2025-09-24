const db = require('./db');

const Bookings = db.sequelize.define('Bookings', {
    id: {
        type: db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'Users',
            key: 'id'
        }
    },
    classId: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'Classes',
            key: 'id'
        }
    },
    scheduleId: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'Schedules',
            key: 'id'
        }
    },
    bookingDate: {
        type: db.Sequelize.DATEONLY,
        allowNull: false
    },
    status: {
        type: db.Sequelize.ENUM('scheduled', 'completed', 'canceled'),
        allowNull: false,
        defaultValue: 'scheduled'
    }
});

// Attention: only uncomment this when syncronizing the table to the database:
//Bookings.sync({ force: true })

module.exports = Bookings;