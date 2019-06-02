require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
const session = require("express-session");
const app = express();
app.use(json());

//controllers
const {addDress, createProduct} = require('./controllers/createProductsController')
const {getProductInfo, getDresses, getDress} = require('./controllers/getProductsController')
const {signin, getUser, logout} = require('./controllers/authenticationController')

//express session
app.use(
  session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7
    }
  })
);

//database connection
massive(process.env.CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("Database connected");
});

//ENDPOINTS

app.post("/api/admin/addDress", addDress);
app.get("/api/admin/getDresses", getDresses)
app.post("/api/admin/createProduct", createProduct)
app.get("/api/product/:id", getProductInfo);
app.get("/api/dress/:id", getDress);
app.post("/api/auth/signin", signin )
app.get("/api/auth/user", getUser);
app.get("/api/auth/logout", logout)


app.listen(4000, () => {
    console.log(`Listening on ${process.env.EXPRESS_PORT}`);
  });
  