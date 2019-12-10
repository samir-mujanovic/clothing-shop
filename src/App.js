import React from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/homepage/homepage";
import AboutUs from "./pages/about";
import Shop from "./pages/shop/shop";
import Contact from "./pages/contact";

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
      </Switch>
    </div>
  );
}

export default App;
