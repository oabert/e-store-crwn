import './App.css';
import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './redux/user/user.selectors';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop-page/shop-page.component';
import Header from './components/header/header.component';
import SingInAndSingUp from './pages/sing-in-and-sing-up-page/sing-in-and-sing-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

// import {auth, createUserProfileDoc} from './firebase/firebase.utils';

import {checkUserSession} from "./redux/user/user.actions";

class App extends React.Component {


    // unsubscribeFromAuth = null;

    componentDidMount() {

        const { checkUserSession } = this.props;
        checkUserSession();
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (

            <div>
                <Header/>
                <Switch>
                    <Route exact path='/' component={Homepage}/>
                    <Route path='/shop' component={ShopPage}/>
                    <Route exact path='/checkout' component={CheckoutPage}/>
                    <Route exact
                           path='/signin'
                           render={() => this.props.currentUser
                               ?
                               (<Redirect to='/'/>)
                               :
                               (<SingInAndSingUp/>)}/>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    checkUserSession: () => dispatch(checkUserSession())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
