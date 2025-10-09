require('dotenv').config();
const express = require('express');
const cors = require('cors');
const user_routes = require('./routes/user_routes');
const schedule_routes = require('./routes/schedule_routes');
const booking_routes = require('./routes/booking_routes');
const db = require('./models');
const { sequelize } = require('./config/database');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to allow connections from any origins, usefull for developing
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send("Pagina inicial");
})

app.use('/api/user', user_routes); // Initialize user routes group with /api/user prefix
app.use('/api/schedules', schedule_routes); // Initialize schedules routes group with /api/schedules or /api/schedules/:id
app.use('/api/bookings', booking_routes);// Initialize bookings routes group with /api/bookings or /api/bookings/:id
const startServer = async() => {
    // Test if conection to database is successfull
    try {
        await sequelize.authenticate();
        console.log('\x1b[32m\x1b[1m%s\x1b[0m', 'Conexão com banco de dados estabelecida com sucesso!');
    
        // Syncronize entire database
        await db.sequelize.sync({ alter: true })  // should only be used in development environment
        .then(() => {
            console.log('\x1b[32m\x1b[1m%s\x1b[0m', "Tabelas do banco de dados sincronizadas!");
    
            app.listen(port, () => {
                console.log(`Server running on http://localhost:${port}`);
            });
    
        }).catch(err => {
            console.log('\x1b[31m\x1b[1m%s\x1b[0m', "Não foi possível sincronizar tabelas: " + err);
        });
    
    } catch (err) {
        console.log('\x1b[31m\x1b[1m%s\x1b[0m', 'Não foi possível estabelecer conexão com o banco de dados: ' + err);
    }
};

startServer();

// TODO: test new database structure
// TODO: review database tables
