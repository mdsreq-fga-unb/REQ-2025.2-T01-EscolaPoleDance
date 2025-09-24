const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const { sequelize } = require('../config/database');
const db = {};

fs
    .readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;


/*
// Association class <-> schedule
Class.hasMany(Schedule, {
    foreignKey: 'classId',
    as: 'schedules'
});
Schedule.belongsTo(Class, {
    foreignKey: 'classId',
    as: 'class'
});

// Association user <-> class
User.hasMany(Class, {
    foreignKey: 'classId',
    as: 'class'
});
Class.belongsTo(User, {
    foreignKey: 'classId',
    as: 'user'
});

// Association user <-> booking
User.hasMany(Booking, {
    foreignKey: 'userId',
    as: 'bookings'
});
Booking.belongsTo(User, {
    foreignKey: 'userId',
    as: 'user'
});

// Association class <-> booking
Class.hasMany(Booking, {
    foreignKey: 'classId',
    as: 'bookings'
});
Booking.belongsTo(Class, {
    foreignKey: 'classId',
    as: 'class'
});

// Association schedule <-> booking
Schedule.hasMany(Booking, {
    foreignKey: 'scheduleId',
    as: 'bookings'
});
Booking.belongsTo(Schedule, {
    foreignKey: 'scheduleId',
    as: 'schedules'
});
*/


