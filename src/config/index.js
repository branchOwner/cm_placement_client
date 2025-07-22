const config = {
  apiUrl: process.env.REACT_APP_API_URL || 'http://localhost:5000/'|| 'https://default-api.com' ,
  nodeEnv: process.env.REACT_APP_NODE_ENV || 'development'
};

export default config;
