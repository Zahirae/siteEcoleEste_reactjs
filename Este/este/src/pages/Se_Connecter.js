import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import "../seconnecter.css";
import img2 from "../img_avatar2.png";
import Home from './home.js';
import {Link,BrowserRouter, Route} from 'react-router-dom';
import Logo from '../logo';
import img from "../banner_este.gif";
import Navbar2 from "../components/Navbar2.js";
const utilisateur =[
    {nom:"khadija jahid" , password:"hind"}
];

class Se_Connecter extends React.Component
{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            profs:[],
        }
        this.handleUserId=this.handleUserId.bind(this);
        this.handlePassword=this.handlePassword.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.componentDidMount=this.componentDidMount.bind(this);


    }
    componentDidMount(){
        axios.get('http://localhost:5001/prof/')
        .then(response=>{
            if(response.data.length > 0)
                this.setState({
                    profs: response.data.map(prof=>prof)
                })
        })


    }
        
    handleUserId=(e)=>{
        const newState={
            username:e.target.value
        };
        this.setState(newState);
        console.log(this.state.username);
    }

    handlePassword=(e)=>{
        this.setState({password:e.target.value})
        console.log(this.state.password);
    }

    onSubmit=(e)=>{
        e.preventDefault();
         const mot = this.state.password;
         const username=this.state.username;
         const r=this.state.profs
         const i=function (r){

            return r.matricule===mot && r.nom===username;
        };
        
        const prof=this.state.profs.find(i);
        console.log(prof);
        
            if(prof!==undefined)
                {
                window.location = '/Dashboard'; 
             }else{
                alert("Mot de passe Errone ");
             }
            
       
        

    }

            
        

	render()
	{
		return(
            <div id="main"className="App">
            <Logo src={img}/>
            <Navbar2 />
            <div id="liss" className="container">
            <section id="content">
            <form onSubmit={this.onSubmit}>
                <h1>Connexion</h1>
                <div>
                    <input onChange={this.handleUserId} name="UserId" type="text" placeholder="Entrer votre Nom" required="" id="username" />
                </div>
                <div>
                    <input onChange={this.handlePassword} type="password" placeholder="Entrer votre Matricule" required="" id="password" />
                </div>
                <div className= "form-group">
                    <input  type="submit" value="Se Connecter" className="btn btn-primary"/>
                </div>
            </form>
        
    </section>
</div></div>);
	}
}
export default Se_Connecter;