const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Bookings extends Model {
        static associate(models) {
            this.belongsTo(models.Schedules, {
                foreignKey: 'schedulesId',
                as: 'schedules'
            });
            this.belongsTo(models.Users, {
                foreignKey: 'userId',
                as: 'user'
            });
            this.belongsTo(models.Classes, {
                foreignKey: 'classId',
                as: 'class'
            });
        };
    };
    Bookings.init({
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
        modelName: 'Bookings'
    });
    return Bookings;
}

// Attention: only uncomment this when syncronizing the table to the database:
//Bookings.sync({ force: true })