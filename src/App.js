import './App.css';
import Homepage from "./pages/homepage/homepage.component";
import React from 'react';
import {Route} from 'react-router-dom';
import ShopPageComponent from "./pages/shop-page/shop-page.component";
// import HatsPageComponent from "./pages/hats-page/hats-page.component";

function App() {
  return (
    <div>
    <Route exact path='/' component={Homepage}/>
    <Route path='/shop' component={ShopPageComponent}/>
    </div>
  );
}

export default App;
