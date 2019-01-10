const express = require("express");
const initDB = require('./init/init-db');

const start = async () => {

  const app = express();

  // DB
  await initDB.connect();

  // Init app  
  app.get("/djur", (req, res, next) => {
      res.json(["Zambo","Hermelyn","Mazarin","Goliat", "Hönapöna"])
  });

  const port = 8080;

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });

};

start();
