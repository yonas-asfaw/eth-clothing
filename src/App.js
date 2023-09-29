import React from 'react';
import { Route, Routes, useParams, Link } from "react-router-dom";
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignIn from './pages/signinpage/signinpage.component';
import { auth } from './firbase/firebase.utils';
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }



  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>

          <Route exact path="/" Component={Homepage} />
          <Route exact path='/shop' Component={ShopPage} />
          <Route exact path='/sigin' Component={SignIn} />

        </Routes>
      </div>
    );
  }
}

export default App;
