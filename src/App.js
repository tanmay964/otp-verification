import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import * as firebaseui from "firebaseui";
import firebaseConfig from './firebase'
import firebase from 'firebase'
import { BrowserRouter, Route } from 'react-router-dom';
import otp from './Otp';
import Dashboard from './Dashboard';

function App() {

  

  return (
    <BrowserRouter>
    <div className="App">
      <Route exact path = "/" component = {otp}></Route>
      <Route path = "/dashboard" component = {Dashboard}></Route>
    </div>
    </BrowserRouter>
  );
}

export default App;
