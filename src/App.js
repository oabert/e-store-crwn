import './App.css';
import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Homepage from "./pages/homepage/homepage.component";
import ShopPageComponent from "./pages/shop-page/shop-page.component";
import Header from "./components/header/header.component";
import SingInAndSingUp from "./pages/sing-in-and-sing-up-page/sing-in-and-sing-up.component";

import {auth, createUserProfileDoc} from "./firebase/firebase.utils";

import {connect} from "react-redux";

import {setCurrentUser} from "./redux/user/user.actions";

class App extends React.Component {


    unsubscribeFromAuth = null;

    componentDidMount() {

        const {setCurrentUser} = this.props;

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDoc(userAuth);

                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                        currentUser: {
                            id: snapShot.id,
                            ...snapShot.data()
                        }
                    });

                    console.log(this.state);

                });
            } else {
                setCurrentUser(userAuth);
            }
        })
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
                    <Route path='/shop' component={ShopPageComponent}/>
                    <Route path='/signin' component={SingInAndSingUp}/>
                </Switch>
            </div>
        );
    }

}

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
