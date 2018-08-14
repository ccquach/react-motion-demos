import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { Provider } from 'react-redux';
import rootReducer from './reducer';

// create history object
const history = createBrowserHistory();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// supply history object to new root reducer
const store = createStore(
  connectRouter(history)(rootReducer), // new root reducer with router state
  composeEnhancer(
    applyMiddleware(
      routerMiddleware(history) // for dispatching history actions (e.g. push)
    )
  )
);

ReactDOM.render(
  <Provider store={store}>
    {/* Pass history object down to ConnectedRouter */}
    <App history={history} />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
