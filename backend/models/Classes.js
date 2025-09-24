const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Classes extends Model {
        static associate(models) {
            this.hasMany(models.Schedule, {
               foreignKey: 'classId',
               as: 'schedules'
            });

            this.belongsTo(models.User, {
                foreignKey: 'classId',
                as: 'user'
            });

            this.hasMany(models.Bookings, {
                foreignKey: 'classId',
                as: 'bookings'
            });
        }
    };

    Classes.init({
        id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
        },
        scheduleId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Schedules',
                key: 'id'
            }
        },
        level: {
            type: DataTypes.ENUM('beginner', 'intermediate', 'advanced'),
            allowNull: false
        },
        maxStudents: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        enrolledStudents: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        status: {
            type: DataTypes.ENUM('active','inactive','full'),
            allowNull: false,
            defaultValue: 'active'
        }
    }, {
        sequelize,
        modelName: 'Classes'
    });
    return Classes;
}

// Attention: only uncomment this when syncronizing the table to the database:
//Classes.sync({ force: true })