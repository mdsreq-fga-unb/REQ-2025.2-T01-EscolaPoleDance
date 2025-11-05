const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('.');
const database = require('../../config/database');

module.exports = (sequelize, DataTypes) => {
    class Package extends Model {
        static associate(models) {
            this.belongsTo(models.User, {
                foreignKey: 'packageId',
                as: 'user'
            });
        }
    };

    Package.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        discount: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        installments: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        classCredits: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        status: {
            type: DataTypes.ENUM('active', 'inactive'),
            allowNull: false,
            defaultValue: 'active'
        }
    }, {
        sequelize,
        modelName: 'Package',
        tableName: 'Packages'
    });
    return Package;    
    
}

// Attention: only uncomment this when syncronizing the table to the database:
//Packages.sync({ force: true })

