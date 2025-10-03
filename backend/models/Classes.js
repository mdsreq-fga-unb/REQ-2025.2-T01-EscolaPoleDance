const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Class extends Model {
        static associate(models) {
            // Classes <-> Users
            this.belongsTo(models.User, {
                foreignKey: 'classId',
                as: 'user'
            });
            // Classes <-> Bookings
            this.hasMany(models.Booking, {
                foreignKey: 'classId',
                as: 'bookings'
            });
        }
    };

    Class.init({
        id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
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
        modelName: 'Class',
        tableName: 'Classes'
    });
    return Class;
}

// Attention: only uncomment this when syncronizing the table to the database:
//Classes.sync({ force: true })