const express = require("express");
const app = express();
const massive = require("massive");
require("dotenv").config();
const { SERVER_PORT, CONNECTION_STRING } = process.env;
const products_controller = require("./products_controller");
app.use(express.json());

massive(CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
  })
  .catch(err => console.log(err));

app.post("/api/products", products_controller.create);
app.get("/api/products", products_controller.getAll);
app.get("/api/products/:id", products_controller.getOne);
app.put("/api/products/:id", products_controller.update);
app.delete("/api/products/:id", products_controller.delete);

app.listen(SERVER_PORT, () => {
  console.log(`server listening on ${SERVER_PORT}`);
});
