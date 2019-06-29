require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
const session = require("express-session");
const app = express();
app.use(json());

//controllers
const {
  addDress,
  addBonnet,
  addShorts,
  addBloomers,
  addSkirt,
  addVest,
  addBowtie,
  addBibdana,
  addBurpcloth,
  addDroolpad,
  addHairbow,
  addHeadband,
  addSuspenders,
  createProduct
} = require("./controllers/createProductsController");
const {
  getProductInfo,
  getDresses,
  getBonnets,
  getShorts,
  getBloomers,
  getSkirts,
  getVests,
  getBibdanas,
  getBowties,
  getBurpcloths,
  getDroolpads,
  getHairbows,
  getHeadbands,
  getSuspenders,
  getDress,
  getBonnet,
  getShort,
  getBloomer,
  getSkirt,
  getVest,
  getBibdana,
  getBowtie,
  getBurpcloth,
  getDroolpad,
  getHairbow,
  getHeadband,
  getSuspender,
  getFavorites
} = require("./controllers/getProductsController");
const {
  signin,
  getUser,
  logout
} = require("./controllers/authenticationController");
const { addToCart, removeFromCart } = require("./controllers/cartController");

//express session
const pgSession = require("connect-pg-simple")(session);
app.use(
  session({
    store: new pgSession({
      conString: process.env.CONNECTION_STRING
    }),
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    expires: false,
    name: "shop-lidora",
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
app.post("/api/admin/createProduct", createProduct);

app.post("/api/admin/addDress", addDress);
app.post("/api/admin/addBonnet", addBonnet);
app.post("/api/admin/addShorts", addShorts);
app.post("/api/admin/addBloomers", addBloomers);
app.post("/api/admin/addSkirt", addSkirt);
app.post("/api/admin/addVest", addVest);
app.post("/api/admin/addBibdanas", addBibdana);
app.post("/api/admin/addBowties", addBowtie);
app.post("/api/admin/addBurpcloths", addBurpcloth);
app.post("/api/admin/addDroolpads", addDroolpad);
app.post("/api/admin/addHairbows", addHairbow);
app.post("/api/admin/addHeadbands", addHeadband);
app.post("/api/admin/addSuspenders", addSuspenders);

app.get("/api/admin/getDresses", getDresses);
app.get("/api/admin/getBonnets", getBonnets);
app.get("/api/admin/getShorts", getShorts);
app.get("/api/admin/getBloomers", getBloomers);
app.get("/api/admin/getSkirts", getSkirts);
app.get("/api/admin/getVests", getVests);
app.get("/api/admin/getBibdanas", getBibdanas);
app.get("/api/admin/getBowties", getBowties);
app.get("/api/admin/getBurpcloths", getBurpcloths);
app.get("/api/admin/getDroolpads", getDroolpads);
app.get("/api/admin/getHairbows", getHairbows);
app.get("/api/admin/getHeadbands", getHeadbands);
app.get("/api/admin/getSuspenders", getSuspenders);

app.get("/api/product/:id", getProductInfo);
app.get("/api/dress/:id", getDress);
app.get("/api/bonnet/:id", getBonnet);
app.get("/api/short/:id", getShort);
app.get("/api/bloomer/:id", getBloomer);
app.get("/api/skirt/:id", getSkirt);
app.get("/api/vest/:id", getVest);
app.get("/api/bibdana/:id", getBibdana);
app.get("/api/bowtie/:id", getBowtie);
app.get("/api/burpcloth/:id", getBurpcloth);
app.get("/api/droolpad/:id", getDroolpad);
app.get("/api/hairbow/:id", getHairbow);
app.get("/api/headband/:id", getHeadband);
app.get("/api/suspender/:id", getSuspender);

app.get("/api/favorites", getFavorites)



app.post("/api/auth/signin", signin);
app.get("/api/auth/user", getUser);
app.get("/api/auth/logout", logout);
app.post("/api/cart", addToCart);
app.delete("/api/cart/:productName", removeFromCart);

app.listen(4000, () => {
  console.log(`Listening on ${process.env.EXPRESS_PORT}`);
});
