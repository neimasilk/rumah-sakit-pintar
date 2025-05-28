const bcrypt = require('bcrypt');
const { sequelize } = require('../config/database');
const User = require('../models/user.model');

const seedAdminUser = async () => {
  try {
    // Hash password
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash('admin123', saltRounds);

    // Create admin user
    await User.create({
      username: 'admin',
      password_hash: passwordHash,
      role: 'admin'
    });

    console.log('Admin user created successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding admin user:', error);
    process.exit(1);
  }
};

// Connect to database and run seeding
sequelize.authenticate()
  .then(() => seedAdminUser())
  .catch(err => {
    console.error('Database connection failed:', err);
    process.exit(1);
  });