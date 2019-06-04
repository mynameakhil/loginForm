import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from "redux";
import { Provider} from "react-redux";
import reducer from './reducer';



console.log(reducer)
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
console.log(store.getState())

ReactDOM.render( < Provider store = {store}>
        <App/>
        </Provider>, document.getElementById('root'));
