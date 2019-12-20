import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import LoadingPage from './components/LoadingPage';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { startSetOptions } from './actions/options';

import { login, logout } from './actions/auth';
import { firebase } from './firebase/firebase';


const store = configureStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    renderApp();
    if (history.location.pathname === '/') {
      history.push('/dashboard');
    }
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});


// firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//       // console.log('uid', user.uid);
//       store.dispatch(login(user.uid));
//       store.dispatch(startSetOptions()).then(() => {
//           renderApp();
//           if (history.location.pathname === '/') {
//               history.push('/dashboard')
//           }
//       });
//   } else {
//       store.dispatch(logout());
//       renderApp();
//       history.push('/');
//   }
// });
