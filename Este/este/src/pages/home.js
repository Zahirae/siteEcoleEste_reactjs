import React from 'react';
import Logo from '../logo';
import img from "../banner_este.gif";
import Navbar2 from "../components/Navbar2.js";
const slt={
	
	color:'gray',
	fontfamily:'verdana'
};
class Home extends React.Component
{

	render()
	{
		return (
	<div id="main"className="App">
    <Logo src={img}/>
    <Navbar2 />
    <div>
    this is a Home page
    </div>
       <footer className="container-fluid bg-4 text-center">
  <p>@CopyRight <a href="https://www.este.ucam.ac.ma">www.este.ucam.ac.ma</a></p> 
</footer>
    </div>);
	}
}
export default Home;