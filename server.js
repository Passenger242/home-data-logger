const express = require("express");
const initExpress = require('./init/init-express');
const initDB = require('./init/init-db');
const { BASE_PATH } = require('./util/constants');

const start = async () => {

  const app = express();

  initExpress(app);

  // DB
  await initDB.connect();

  const confAPI  = require('./api/configure-api');
  
  const apiv1 = confAPI(app)

  // Init app
  app.use(BASE_PATH, apiv1);

  const port = 8080;

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });

};

start();
