import React, { Component } from 'react';
//import logo from './nearForm-logo.svg';
import './App.css';
import { Connector } from 'mqtt-react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import _MessageContainer from './MessageContainer.js';
import { subscribe } from 'mqtt-react';
import _Dropdown from './components/dropdown';

const MessageContainer = subscribe({ topic: '@near/demo' })(_MessageContainer);
const Dropdown = subscribe({ topic: '@near/demo' })(_Dropdown);


class App extends Component {
  render() {
    return (
      <Connector mqttProps="ws://localhost:8000/">
        <HashRouter>
          <div>
            <h1>Zipper App</h1>
            <ul className="header">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/stuff">Orders</NavLink></li>
              {/* <li><NavLink to="/contact">Contact</NavLink></li> */}
            </ul>
            <div className="content">
              <Route exact path="/" component={MessageContainer} />
              <Route path="/stuff" component={Dropdown} />

              {/* <Route path="/contact" component={MessageContainer3}/> */}
            </div>
          </div>

        </HashRouter>
      </Connector>
    );
  }
}

export default App;