import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import Homepage from './components/Homepage/Homepage';
import MyListing from './components/Product/MyLisitng';
import ProductDetail from './components/Product/ProductDetails';
import MyCart from './components/Cart/Cart';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/products/current' exact={true} >
          <MyListing />
        </ProtectedRoute>
        <Route path='/products/:productId' exact={true} >
          <ProductDetail />
        </Route>
        <ProtectedRoute path='/carts' exact={true} >
          <MyCart />
        </ProtectedRoute>
        <Route path='/' exact={true} >
          <Homepage />
        </Route>
        <Route path='/coming-soon' exact={true} >
          <h1>Feature coming soon!</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
