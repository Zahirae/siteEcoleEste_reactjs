import React from 'react';
import About from './about.js';
import articles from '../articles.js';
import Home from '../pages/home.js';
import Se_Connecter from '../pages/Se_Connecter.js'
import 'bootstrap/dist/css/bootstrap.css';

class Navbar extends React.Component
{
	render()
	{
		return (
		<nav className="navbar navbar-inverse">
    <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="/">EST Essaouira</a>
    </div>
    <ul className="nav navbar-nav">
      <li className="active"><a href="#">Home</a></li>
      <li><a href="/About">About</a></li>
      <li><a href="/Articles">Articles</a></li>
    </ul>
    <ul className="nav navbar-nav navbar-right">
      <li><a href="/Se_Connecter"><span className="glyphicon glyphicon-user"></span> Inscription</a></li>
      <li><a href="/Se_Connecter"><span className="glyphicon glyphicon-log-in"></span> Se Connecter</a></li>
    </ul>
  </div>
</nav>
  );
	}
}
export default Navbar;