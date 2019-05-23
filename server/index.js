const express = require("express");
const app = express();
const massive = require("massive");
require("dotenv").config();
const { SERVER_PORT } = process.env;
app.use(express.json());

app.listen(SERVER_PORT, () =>
  console.log(`server listening on ${SERVER_PORT}`)
);
