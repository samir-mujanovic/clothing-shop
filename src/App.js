import React from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import FooterSection from "./components/Footer/FooterSection";

import Homepage from "./pages/homepage/homepage";
import AboutUs from "./pages/about/about";
import Shop from "./pages/shop/shop";
import Contact from "./pages/contact";
import Checkout from "./pages/checkout/checkout";

import "./App.styles.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/about" component={AboutUs} />
        <Route path="/shop" component={Shop} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/checkout" component={Checkout} />
      </Switch>
      <FooterSection />
    </div>
  );
}

export default App;
