import React from 'react';
import { Route, Routes, useParams, Link } from "react-router-dom";
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignIn from './pages/signinpage/signinpage.component';
import { auth, creatUserProfileDocument } from './firbase/firebase.utils';
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
      isLoading: true // Add a loading state
    }
  }
  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await creatUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }

          }, () => {
            console.log(this.state.currentUser);
            this.setState({ isLoading: false });// Log the updated state inside the callback function
          });

        })
      }
      this.setState({ currentUser: userAuth });
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }



  render() {
    const { currentUser, isLoading } = this.state;
    console.log(currentUser);
    return (
      <div>

        {isLoading ? ( // Render a loading state or spinner while isLoading is true
          <div>Loading...</div>
        ) : (
          <Header currentUser={currentUser} /> // Pass the currentUser state after it has been fetched
        )}

        <Routes>
          <Route exact path="/" Component={Homepage} />
          <Route exact path='/shop' Component={ShopPage} />
          <Route exact path='/sigin' Component={SignIn} /> {/* Correct the route path to '/signin' */}
        </Routes>
      </div>
    );
  }
}

export default App;
