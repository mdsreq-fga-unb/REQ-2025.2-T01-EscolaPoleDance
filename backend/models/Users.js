const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
            this.hasMany(models.Classes, {
                foreignKey: 'classId',
                as: 'class'
            });
            this.hasMany(models.Bookings, {
                foreignKey: 'userId',
                as: 'bookings'
            });
        }
    };

    User.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: true
        },
        role: {
            type: DataTypes.ENUM('user', 'admin'),
            allowNull: false,
            defaultValue: 'user'
        },
        status: {
            type: DataTypes.ENUM('active', 'inactive', 'pending'),
            allowNull: false,
            defaultValue: 'pending'
        },
        expires: {
            type: DataTypes.DATETIME,
            allowNull: true
        },
        classId: {
            type: DataTypes.INTEGER,
            allowNull: true,
                references: {
                    model: 'Classes',
                    key: 'id'
                }
        }
    }, {
        sequelize,
        modelName: 'User',
        tableName: 'Users'
    });
    return User;
}

// Attention: only uncomment this when syncronizing the table to the database:
//Users.sync({ force: true })