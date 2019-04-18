import React from "react";
import { Switch, Route } from "react-router-dom";

//MAIN SITE

//Landing
import LandingMain from "../src/components/main/landing/LandingMain";

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
import BurpClothes from "./components/main/shop/baby/BurpClothes";
import DroolPads from "./components/main/shop/baby/DroolPads";

//Product

//Bag

//Checkout

//ADMIN
//Forms
import FormDresses from "../src/components/admin/create-products/FormDresses"

export default (
  <Switch>

    <Route path="/" exact component={LandingMain} />
    <Route path="/shop" exact component={ShopMain} />
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
    <Route path="/shop/burpcloths" exact component={BurpClothes} />
    <Route path="/shop/droolpads" exact component={DroolPads} />

    {/* AdminPages */}
    <Route path="/admin/form/dresses" exact component={FormDresses} />
  </Switch>
);
