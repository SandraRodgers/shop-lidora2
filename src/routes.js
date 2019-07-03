import React from "react";
import { Switch, Route } from "react-router-dom";

//MAIN SITE

//Landing
import LandingMain from "../src/components/main/landing/LandingMain";
import Login from "./components/main/landing/Login"

//Shop
import ShopMain from "../src/components/main/shop/ShopMain";
import Dresses from "./components/main/shop/clothing/Dresses";
import Shorts from "./components/main/shop/clothing/Shorts";
import Bloomers from "./components/main/shop/clothing/Bloomers";
import Skirts from "./components/main/shop/clothing/Skirts";
import Vests from "./components/main/shop/clothing/Vests";
import Bonnets from "./components/main/shop/accessories/Bonnets";
import Bowties from "./components/main/shop/accessories/Bowties";
import Hairbows from "./components/main/shop/accessories/Hairbows";
import Headbands from "./components/main/shop/accessories/Headbands";
import Suspenders from "./components/main/shop/accessories/Suspenders";
import Bibdanas from "./components/main/shop/baby/Bibdanas";
import BurpCloths from "./components/main/shop/baby/BurpCloths";
import DroolPads from "./components/main/shop/baby/DroolPads";
import Flashsale from "./components/main/shop/Flashsale"

//Product
import Product from "../src/components/main/product/Product"

//Bag

//Checkout
import CheckoutOne from "../src/components/checkout/CheckoutOne"
import CheckoutTwo from "../src/components/checkout/CheckoutTwo"

//StyleGuide
import StyleGuide from "./components/main/styleguide/StyleGuide"

//Custom
import Custom from "./components/main/custom/Custom"

//Account
import Account from "./components/user/Account"

//Contact
import Contact from "./components/main/contact/Contact"

//ADMIN
//Forms
import FormDresses from "../src/components/admin/create-products/FormDresses"
import FormBonnets from "../src/components/admin/create-products/FormBonnets"
import FormShorts from "../src/components/admin/create-products/FormShorts"
import FormBloomers from "../src/components/admin/create-products/FormBloomers"
import FormSkirts from "../src/components/admin/create-products/FormSkirts"
import FormVests from "../src/components/admin/create-products/FormVests"
import FormBibdanas from "../src/components/admin/create-products/FormBibdanas"
import FormBowties from "../src/components/admin/create-products/FormBowties"
import FormBurpcloths from "../src/components/admin/create-products/FormBurpcloths"
import FormDroolpads from "../src/components/admin/create-products/FormDroolpads"
import FormHairbows from "../src/components/admin/create-products/FormHairbows"
import FormHeadbands from "../src/components/admin/create-products/FormHeadbands"
import FormSuspenders from "../src/components/admin/create-products/FormSuspenders"
import FormFlashsale from "../src/components/admin/create-products/FormFlashsale"
import AdminMain from "../src/components/admin/admin-main/AdminMain"


export default (
  <Switch>

    <Route path="/" exact component={LandingMain} />
    <Route path="/login" exact component={Login} />
    <Route path="/shop" exact component={ShopMain} />
    <Route path="/styleguide" exact component={StyleGuide} />
    <Route path="/custom" exact component={Custom} />
    <Route path="/user/account" exact component={Account} />
    <Route path="/contact" exact component={Contact} />

    {/* Product Pages */}
    <Route path="/shop/dresses" exact component={Dresses} />
    <Route path="/shop/shorts" exact component={Shorts} />
    <Route path="/shop/bloomers" exact component={Bloomers} />
    <Route path="/shop/skirts" exact component={Skirts} />
    <Route path="/shop/vests" exact component={Vests} />
    <Route path="/shop/bonnets" exact component={Bonnets} />
    <Route path="/shop/bowties" exact component={Bowties} />{" "}
    <Route path="/shop/hairbows" exact component={Hairbows} />{" "}
    <Route path="/shop/headbands" exact component={Headbands} />{" "}
    <Route path="/shop/suspenders" exact component={Suspenders} />
    <Route path="/shop/bibdanas" exact component={Bibdanas} />{" "}
    <Route path="/shop/burpcloths" exact component={BurpCloths} />
    <Route path="/shop/droolpads" exact component={DroolPads} />
    <Route path="/shop/flashsale" exact component={Flashsale} />
{/* Product Page */}
    <Route path="/products/:id" exact component={Product} />

    {/* AdminPages */}
    <Route path="/admin" exact component={AdminMain}></Route>
    <Route path="/admin/form/dresses" exact component={FormDresses} />
    <Route path="/admin/form/bonnets" exact component={FormBonnets} />
    <Route path="/admin/form/shorts" exact component={FormShorts} />
    <Route path="/admin/form/bloomers" exact component={FormBloomers} />
    <Route path="/admin/form/skirts" exact component={FormSkirts} />
    <Route path="/admin/form/vests" exact component={FormVests} />
    <Route path="/admin/form/bibdanas" exact component={FormBibdanas} />
    <Route path="/admin/form/bowties" exact component={FormBowties} />
    <Route path="/admin/form/burpcloths" exact component={FormBurpcloths} />
    <Route path="/admin/form/droolpads" exact component={FormDroolpads} />
    <Route path="/admin/form/hairbows" exact component={FormHairbows} />
    <Route path="/admin/form/headbands" exact component={FormHeadbands} />
    <Route path="/admin/form/suspenders" exact component={FormSuspenders} />
    <Route path="/admin/form/flashsale" exact component={FormFlashsale} />


  {/* Checkout */}
  <Route path="/checkout/one" exact component={CheckoutOne}/>
  <Route path="/checkout/two" exact component={CheckoutTwo}/>
  </Switch>
);

