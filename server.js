const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

const events = require('./routes/api/events');
const blogs = require('./routes/api/blogs');


//Bodyparser middleware
app.use(bodyParser.json());

//DB config
const db = require('./config/keys').mongoURI;
mongoose
    .connect(db)
    .then(() => console.log('Database connected!'))
    .catch(err => console.log(err));

//Use routes
app.use('/api/events', events);
app.use('/api/blogs', blogs);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
