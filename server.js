const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');

const users = require("./routes/api/users");

const app = express();

//Bodyparser Middleware
// app.use(
//     bodyParser.urlencoded({
//         extended: false
//     })
// );

app.use(bodyParser.json());

//Connect Database
connectDB();

// app.get('/', (req, res) => res.send('API running'));

//Define routes
app.use("/api/users", users);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));