const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Users extends Model {
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

    Users.init({
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
    }, {
        sequelize,
        modelName: 'Users'
    });
    return Users;
}

// Attention: only uncomment this when syncronizing the table to the database:
//Users.sync({ force: true })