const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
            // Users <-> Packages
            this.hasMany(models.Package, {
                foreignKey: 'userId',
                as: 'packages'
            });
            // Users <-> Bookings
            this.hasMany(models.Booking, {
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
            validate: {
                isEmail: true,  // Catch 'SequelizeValidationError' to handle invalid emails
            }
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
        packageId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'Packages',
                key: 'id'
            }
        },
        expires: {
            type: DataTypes.DATE,
            allowNull: true
        },
        remainingCredits: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        }
    }, {
        sequelize,
        modelName: 'User',
        tableName: 'Users',
        indexes: [
            {
                unique: true,
                fields: ['email']
            }
        ]
    });
    return User;
}

// Attention: only uncomment this when syncronizing the table to the database:
//Users.sync({ force: true })