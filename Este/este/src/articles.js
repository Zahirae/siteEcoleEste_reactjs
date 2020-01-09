import React from 'react';
import listArticles from './listArticles';
import Art from './Art';
import Logo from './logo';
import img from "./banner_este.gif";
import Navbar2 from "./components/Navbar2.js";
class Articles extends React.Component
{
	state={
		articles:[
		{
			id:1,
			titre:"9ème édition de la compétition 'pring Coding Days'",
			src:'https://robohash.org/15',
			txt:"La finale de la 9ème édition de la compétition 'Spring Coding Days' aura lieu le 21 Décembre 2019 à l'Ecole Supérieure de Technologie d'Essaouira. Le thème de cette année est 'Intelligence Artificielle et Jeunes' L'objectif est de développer l'innovation et l'entrepreneuriat digital chez les jeunes",
			vote:0
		},
		{
			id:2,
			titre:"9ème édition de la compétition 'pring Coding Days'",
			src:'https://robohash.org/15',
			txt:"La finale de la 9ème édition de la compétition 'Spring Coding Days' aura lieu le 21 Décembre 2019 à l'Ecole Supérieure de Technologie d'Essaouira. Le thème de cette année est 'Intelligence Artificielle et Jeunes' L'objectif est de développer l'innovation et l'entrepreneuriat digital chez les jeunes",
			vote:0
		},
		{
			id:3,
			titre:"9ème édition de la compétition 'pring Coding Days'",
			src:'https://robohash.org/15',
			txt:"La finale de la 9ème édition de la compétition 'Spring Coding Days' aura lieu le 21 Décembre 2019 à l'Ecole Supérieure de Technologie d'Essaouira. Le thème de cette année est 'Intelligence Artificielle et Jeunes' L'objectif est de développer l'innovation et l'entrepreneuriat digital chez les jeunes",
			vote:0
		},
		{
			id:4,
			titre:"9ème édition de la compétition 'pring Coding Days'",
			src:'https://robohash.org/15',
			txt:"La finale de la 9ème édition de la compétition 'Spring Coding Days' aura lieu le 21 Décembre 2019 à l'Ecole Supérieure de Technologie d'Essaouira. Le thème de cette année est 'Intelligence Artificielle et Jeunes' L'objectif est de développer l'innovation et l'entrepreneuriat digital chez les jeunes",
			vote:0
		}
		]
	}
	markVote=(id)=>
	{
		this.setState({articles: this.state.articles.map(td=> {
			if(td.id===id)
			{
				td.vote+=1
			}
			return td;
		})});
	}
		render_list()
		{
			return this.state.articles.map((item)=>
			{
				return (
					<Art key={item.id} item={item} markVote={this.markVote}/>
					)
			});
		}

	render()
	{
		return(
			<div id="main"className="App">
    <Logo src={img}/>
    <Navbar2 />
			<div>
				{this.render_list()}
			</div>
			</div>
			);
	
	}
}
export  default Articles; 