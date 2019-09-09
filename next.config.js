require('dotenv').config();

if (!process.env.API_KEY && !process.env.API_KEY) {
  throw 'ERROR, you are missing environment variables. Please check that you correctly defined a .env file'; // eslint-disable-line no-throw-literal
}

module.exports = {
  exportPathMap() {
    return {
      '/': { page: '/' },
    };
  },

  env: {
    API_KEY: process.env.API_KEY,
    API_URL: process.env.API_URL,
  },
};
