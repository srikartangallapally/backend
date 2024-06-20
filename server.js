const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/fmiledata', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

app.use('/api', require('./routes/api'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
