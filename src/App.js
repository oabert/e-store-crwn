import './App.css';
import Homepage from "./pages/homepage/homepage.component";
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import ShopPageComponent from "./pages/shop-page/shop-page.component";
import Header from "./components/header/header.component";


function App() {
  return (

    <div>
      <Header/>
      <Switch>
    <Route exact path='/' component={Homepage}/>
    <Route path='/shop' component={ShopPageComponent}/>
      </Switch>
    </div>
  );
}

export default App;
