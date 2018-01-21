const config = {
  "development": {
    "serverUrl": "http://localhost:4000",
  },
  "production": {
    "serverUrl": "https://pgkt.herokuapp.com",
  },
};

export default config[process.env.NODE_ENV] || config.development;
