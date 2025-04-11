require('dotenv').config({ path: '../../.env' });
const { testConnection } = require('../config/database');

// Run the test connection function
(async () => {
  const result = await testConnection();
  
  if (result) {
    console.log('Database connection test completed successfully.');
    process.exit(0);
  } else {
    console.error('Database connection test failed.');
    process.exit(1);
  }
})();