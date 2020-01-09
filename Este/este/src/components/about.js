import React from 'react';
import Logo from '../logo';
import img from "../banner_este.gif";
import Navbar2 from "./Navbar2.js";
class About extends React.Component
{
	render()
	{
	return(<div id="main"className="App">
    <Logo src={img}/>
    <Navbar2 />
    <div>
    this is a about page
    </div>
    </div>);
	}
	
}
export  default About; 