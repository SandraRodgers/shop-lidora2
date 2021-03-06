require("dotenv").config();
const path = require('path');
const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
const session = require("express-session");
const app = express();
const cors = require("cors")
app.use(cors())
app.use(json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "shoplidora-beta.com"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  next();

});

app.use( express.static( `${__dirname}/../build` ) );

//controllers
const {
  addDress,
  addBonnet,
  addShorts,
  addBloomers,
  addSkirt,
  addShirt,
  addVest,
  addBowtie,
  addBibdana,
  addBurpcloth,
  addDroolpad,
  addHairbow,
  addHeadband,
  addSuspenders,
  createProduct,
  addFlashsale
} = require("./controllers/createProductsController");
const {
  getProductInfo,
  getDresses,
  getBonnets,
  getShorts,
  getBloomers,
  getSkirts,
  getShirts,
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
  getShirt,
  getVest,
  getBibdana,
  getBowtie,
  getBurpcloth,
  getDroolpad,
  getHairbow,
  getHeadband,
  getSuspender,
  getFavorites,
  getFlashsale,
  getFlashsaleProduct,
  getCloset
} = require("./controllers/getProductsController");
const {
  signin,
  getUser,
  logout
} = require("./controllers/authenticationController");
const {
  addToCart,
  removeFromCart,
  removeFlashItem
} = require("./controllers/cartController");
const {
  getPreviousAddress,
  addNewAddress,
  postOrder
} = require("./controllers/checkoutController");
const {createCoupon, getCoupon, applyCoupon} = require("./controllers/adminController")
const {postFabrics, getFabrics, postStyles, getStyles} = require("./controllers/styleguideController")
const {customOrder, subscribeNews} = require("./controllers/nodemailerController")
const {editAddress, getOrderDetails} = require("./controllers/userAccountController")
const { editProduct } = require("./controllers/editProductsController")

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



function checkTimestamp(req, res, next) {
  removeFlashItem(req);
  next();
}



//ENDPOINTS

//create products endpoints
app.post("/api/admin/createProduct", createProduct);
app.post("/api/admin/addDress", addDress);
app.post("/api/admin/addBonnet", addBonnet);
app.post("/api/admin/addShorts", addShorts);
app.post("/api/admin/addBloomers", addBloomers);
app.post("/api/admin/addSkirt", addSkirt);
app.post("/api/admin/addShirt", addShirt);
app.post("/api/admin/addVest", addVest);
app.post("/api/admin/addBibdanas", addBibdana);
app.post("/api/admin/addBowties", addBowtie);
app.post("/api/admin/addBurpcloths", addBurpcloth);
app.post("/api/admin/addDroolpads", addDroolpad);
app.post("/api/admin/addHairbows", addHairbow);
app.post("/api/admin/addHeadbands", addHeadband);
app.post("/api/admin/addSuspenders", addSuspenders);

//get all of a product category endpoints
app.get("/api/admin/getDresses", getDresses);
app.get("/api/admin/getBonnets", getBonnets);
app.get("/api/admin/getShorts", getShorts);
app.get("/api/admin/getBloomers", getBloomers);
app.get("/api/admin/getSkirts", getSkirts);
app.get("/api/admin/getShirts", getShirts);
app.get("/api/admin/getVests", getVests);
app.get("/api/admin/getBibdanas", getBibdanas);
app.get("/api/admin/getBowties", getBowties);
app.get("/api/admin/getBurpcloths", getBurpcloths);
app.get("/api/admin/getDroolpads", getDroolpads);
app.get("/api/admin/getHairbows", getHairbows);
app.get("/api/admin/getHeadbands", getHeadbands);
app.get("/api/admin/getSuspenders", getSuspenders);

//get one specific product endpoints
app.get("/api/product/:id",  getProductInfo);
app.get("/api/dress/:id", getDress);
app.get("/api/bonnet/:id", getBonnet);
app.get("/api/short/:id", getShort);
app.get("/api/bloomer/:id", getBloomer);
app.get("/api/skirt/:id", getSkirt);
app.get("/api/shirt/:id", getShirt);
app.get("/api/vest/:id", getVest);
app.get("/api/bibdana/:id", getBibdana);
app.get("/api/bowtie/:id", getBowtie);
app.get("/api/burpcloth/:id", getBurpcloth);
app.get("/api/droolpad/:id", getDroolpad);
app.get("/api/hairbow/:id", getHairbow);
app.get("/api/headband/:id", getHeadband);
app.get("/api/suspender/:id", getSuspender);

//edit products endpoints
app.put('/api/admin/product/:id', editProduct)
app.get('/api/closet', getCloset)


//styleguide endpoints
app.post("/api/style/fabrics", postFabrics)
app.get("/api/style/fabrics", getFabrics)
app.post("/api/style/styles", postStyles)
app.get("/api/style/styles", getStyles)

//flashsale and favorites endpoints
app.get("/api/flashsale/:id", getFlashsaleProduct);
app.get("/api/admin/flashsale", getFlashsale);
app.post("/api/admin/flashsale", addFlashsale);
app.get("/api/favorites", getFavorites);

//user account endpoints
app.put('/api/account/address/:id', editAddress)
app.get('/api/account/orders/:id', getOrderDetails)

//coupon endpoints
app.post("/api/admin/coupon", createCoupon)
app.get("/api/checkout/coupon/:code", getCoupon)
app.post("/api/checkout/coupon", applyCoupon)

//auth endpoints
app.post("/api/auth/signin", signin);
app.get("/api/auth/user",checkTimestamp, getUser);
app.get("/api/auth/logout", logout);

//cart endpoints
app.post("/api/cart", addToCart);
app.put("/api/cart/:productName", removeFromCart);
app.delete("/api/flashsale/cart/:flashid", removeFlashItem);

//checkout endpoints
app.get("/api/previousAddress/:id", getPreviousAddress);
app.post("/api/shippingAddress", addNewAddress);
app.post("/api/checkout/order", postOrder)

//nodemailer endpoints
app.post("/nodemailer/customOrder", customOrder)
app.post("/nodemailer/newsletter", subscribeNews)


app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(4000, () => {
  console.log(`Listening on ${process.env.EXPRESS_PORT}`);
});
