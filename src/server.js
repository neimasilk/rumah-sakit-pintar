require('dotenv').config();
const express = require('express');
const { sequelize } = require('./config/database');

// Import models to ensure they are registered with Sequelize
require('./models');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Simple route for testing
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Smart Hospital Management System API' });
});

// Import and use routes
// app.use('/api/auth', require('./routes/auth.routes'));
// app.use('/api/patients', require('./routes/patient.routes'));
// app.use('/api/doctors', require('./routes/doctor.routes'));
// app.use('/api/appointments', require('./routes/appointment.routes'));

// Start server
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  
  try {
    // Test database connection
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});