const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const cors = require("cors");
const cookieParser = require('cookie-parser');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Carefit', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(express.json());
app.use(cors())
app.use(cookieParser())
// Routes
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
