import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyBfOR8dI8HM6dp5QYl-Lh2B7UIX63Mz9Q0",
      authDomain: "manager-3590d.firebaseapp.com",
      databaseURL: "https://manager-3590d.firebaseio.com",
      projectId: "manager-3590d",
      storageBucket: "manager-3590d.appspot.com",
      messagingSenderId: "197149133701"
    };

    firebase.initializeApp(config);
  }

  render () {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

export default App;
