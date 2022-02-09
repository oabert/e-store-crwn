import './App.css';
import React, {useEffect} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import {selectCurrentUser} from './redux/user/user.selectors';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop-page/shop-page.component';
import Header from './components/header/header.component';
import SingInAndSingUp from './pages/sing-in-and-sing-up-page/sing-in-and-sing-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import {checkUserSession} from "./redux/user/user.actions";

const App = () => {

    const currentUser = useSelector(selectCurrentUser);
    const dispatch=useDispatch();

    useEffect(()=>{
      dispatch(checkUserSession());
    },[dispatch]);

    return (

        <div>
            <Header/>
            <Switch>
                <Route exact path='/' component={Homepage}/>
                <Route path='/shop' component={ShopPage}/>
                <Route exact path='/checkout' component={CheckoutPage}/>
                <Route exact
                       path='/signin'
                       render={() => currentUser
                           ?
                           (<Redirect to='/'/>)
                           :
                           (<SingInAndSingUp/>)}/>
            </Switch>
        </div>
    );
};


// const mapStateToProps = createStructuredSelector({
//     currentUser: selectCurrentUser
// });
//
// const mapDispatchToProps = dispatch => ({
//     checkUserSession: () => dispatch(checkUserSession())
// });

export default App;
