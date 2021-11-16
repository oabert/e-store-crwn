import './App.css';
import Homepage from "./pages/homepage/homepage.component";
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import ShopPageComponent from "./pages/shop-page/shop-page.component";
import Header from "./components/header/header.component";
import SingInAndSingUp from "./pages/sing-in-and-sing-up-page/sing-in-and-sing-up.component";
import {auth} from "./firebase/firebase.utils";

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            currentUser: null,
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({currentUser: user});
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (

            <div>
                <Header currentUser={this.state.currentUser}/>
                <Switch>
                    <Route exact path='/' component={Homepage}/>
                    <Route path='/shop' component={ShopPageComponent}/>
                    <Route path='/signin' component={SingInAndSingUp}/>
                </Switch>
            </div>
        );
    }

}

export default App;
