import React from "react";
import { Switch, Route } from "react-router-dom";


//MAIN SITE

//Landing
import LandingMain from "../src/components/main/landing/LandingMain"

//Shop
import ShopMain from "../src/components/main/shop/ShopMain"
import Dresses from "./components/main/shop/clothing/Dresses"
import Shorts from "./components/main/shop/clothing/Shorts"
import Bloomers from "./components/main/shop/clothing/Bloomers"
import Skirts from "./components/main/shop/clothing/Skirts"
import Vests from "./components/main/shop/clothing/Vests"




//Product

//Bag

//Checkout

export default(

    <Switch>
        <Route path="/" exact component={LandingMain} />
        <Route path="/shop" exact component={ShopMain} />
        <Route path="/shop/dresses" exact component={Dresses} />
        <Route path="/shop/shorts" exact component={Shorts} />
        <Route path="/shop/bloomers" exact component={Bloomers} />
        <Route path="/shop/skirts" exact component={Skirts} />
        <Route path="/shop/vests" exact component={Vests} />
    </Switch>
) 