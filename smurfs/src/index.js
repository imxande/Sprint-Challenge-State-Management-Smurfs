import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { createStore, applyMiddleware} from "redux";
import {Provider} from 'react-redux';
import {smurfsReducer} from './store/reducers';
import thunk from 'redux-thunk'


// adding store
const store = createStore(smurfsReducer, applyMiddleware(thunk))


ReactDOM.render(<Provider store = {store} ><App /></Provider>, document.getElementById("root"));
