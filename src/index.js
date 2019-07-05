import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import mainReducer from './reducers/index'

// STORE -> GLOBALIZED STATE
let store = createStore(
    mainReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
