require('dotenv').config();
const express = require('express');
const cors = require('cors');
const user_routes = require('./routes/user_routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


// Routes
app.get('/', (req, res) => {
    res.send("Pagina inicial");
})

app.use('/user', user_routes); // Initialize user routes group with /user prefix

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});