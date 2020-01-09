import React from 'react';
import logo from './logo.svg';
import './App.css';
import Articles from './articles.js';
import Square from './Square';
import Logo from './logo';
import img from "./banner_este.gif";
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/home.js';
import About from './components/about.js';
import Se_Connecter from './pages/Se_Connecter.js';
import Navbar2 from "./components/Navbar2.js";
import Dashboard from'./pages/Dashboard.js';
class App extends React.Component {
  state=
  {
    name:'khadija',
    count:0
  }
  render()
  {
     return (
        <BrowserRouter>
          <Route path='/' exact component={Home}/>
          <Route path='/About' exact component={About}/>
          <Route path='/articles' component={Articles}/>
          <Route path='/Se_Connecter' component={Se_Connecter}/><br/><br/><br/><br/>
          <Route path='/Dashboard' component={Dashboard}/>
        </BrowserRouter>
    );
  }
}

export default App;
