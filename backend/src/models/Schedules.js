const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Schedule extends Model {

        static associate(models) {
            // Schedules <-> Bookings
            this.hasMany(models.Booking, {
                foreignKey: 'scheduleId',
                as: 'bookings'
            });
            this.hasMany(models.Class, {
                foreignKey: 'classId',
                as: 'class'
            })
        };
    };

    Schedule.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        classId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Classes',
                key: 'id'
            }
        },
        dayOfWeek: {
            type: DataTypes.ENUM('monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'),
            allowNull: false
        },
        startTime: {
            type: DataTypes.TIME,
            allowNull: false
        },
        endTime: {
            type: DataTypes.TIME,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Schedule',
        tableName: 'Schedules'
    });
    return Schedule;    
    
};

// Attention: only uncomment this when syncronizing the table to the database:
//Schedules.sync({ force: true })
