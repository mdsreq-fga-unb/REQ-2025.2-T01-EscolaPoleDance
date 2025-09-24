require('dotenv').config();
const express = require('express');
const cors = require('cors');
const user_routes = require('./routes/user_routes');
const db = require('./models');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


// Routes
app.get('/', (req, res) => {
    res.send("Pagina inicial");
})

app.use('/api/user', user_routes); // Initialize user routes group with /api/user prefix

// Syncronize entire database
db.sequelize.sync({ alter: true }).then(() => {
    console.log("Tabelas do banco de dados sincronizadas");

    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });

}).catch(err => {
    console.log("Não foi possível sincronizar tabelas: " + err);
});

// TODO: test new database structure
// TODO: review database tables
