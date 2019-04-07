import React from "react";
import { Switch, Route } from "react-router-dom";


//MAIN SITE

//Landing
import LandingMain from "../src/components/main/landing/LandingMain"

//Shop
import ShopMain from "../src/components/main/shop/ShopMain"

//Product

//Bag

//Checkout

export default(

    <Switch>
        <Route path="/" exact component={LandingMain} />
        <Route path="/shop" exact component={ShopMain} />
    </Switch>
) 