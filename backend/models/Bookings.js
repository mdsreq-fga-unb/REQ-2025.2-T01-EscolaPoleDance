const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Booking extends Model {
        static associate(models) {
            // Booking <-> Schedules
            this.belongsTo(models.Schedules, {
                foreignKey: 'schedulesId',
                as: 'schedules'
            });
            // Booking <-> Users
            this.belongsTo(models.Users, {
                foreignKey: 'userId',
                as: 'user'
            });
            // Booking <-> Classes
            this.belongsTo(models.Classes, {
                foreignKey: 'classId',
                as: 'class'
            });
        };
    };
    Booking.init({
        id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Users',
                key: 'id'
            }
        },
        classId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Classes',
                key: 'id'
            }
        },
        scheduleId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Schedules',
                key: 'id'
            }
        },
        bookingDate: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        status: {
            type: DataTypes.ENUM('scheduled', 'completed', 'canceled'),
            allowNull: false,
            defaultValue: 'scheduled'
        }
    }, {
        sequelize,
        modelName: 'Booking',
        tableName: 'Bookings'
    });
    return Booking;
}

// Attention: only uncomment this when syncronizing the table to the database:
//Bookings.sync({ force: true })