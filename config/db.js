// config/db.js
const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://raheman:raheman@cluster0.6yr8bq0.mongodb.net/carefit', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));
