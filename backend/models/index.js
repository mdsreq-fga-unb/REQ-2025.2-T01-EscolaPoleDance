const db = require('./db');
const User = require('./Users');
const Class = require('./Classes');
const Schedule = require('./Schedules');
const Booking = require('./Bookings');

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

// Syncronize entire database
db.sequelize.sync({ alter: true }).then(() => {
    console.log("Tabelas do banco de dados sincronizadas");
}).catch(err => {
    console.log("Não foi possível sincronizar tabelas: " + err);
});