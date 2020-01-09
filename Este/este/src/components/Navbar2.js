import React from "react";
class Navbar2 extends React.Component
{
	render()
	{
		return (<div className="container center">
            <nav className="menu">
            <h1 className="menu__logo">ESTE</h1>

            <div className="menu__right">
                <ul className="menu__list">
                    <li className="menu__list-item"><a className="menu__link menu__link--active" href="/">Home</a></li>
                    <li className="menu__list-item"><a className="menu__link" href="/About"><b>About</b></a></li>
                    <li className="menu__list-item"><a className="menu__link" href="/articles"><b>Articles</b></a></li>
                    <li className="menu__list-item"><a className="menu__link" href="/Se_Connecter"><b>Se_Connecter</b></a></li>
                </ul>

               
            </div>
        </nav>
    </div>);
	}
}
export default Navbar2;