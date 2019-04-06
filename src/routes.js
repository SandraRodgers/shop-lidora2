import React from "react";
import { Switch, Route } from "react-router-dom";


//MAIN SITE

//Landing
import LandingMain from "../src/components/main/landing/LandingMain"

//Shop

//Product

//Bag

//Checkout

export default(

    <Switch>
        <Route path="/" exact component={LandingMain} />
    </Switch>
) 