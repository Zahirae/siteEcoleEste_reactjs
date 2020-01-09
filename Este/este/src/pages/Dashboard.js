import React from "react";
import axios from "axios";
import "./Dashboard.css";
// import "./all.min.css";
class Dashboard extends React.Component{
	constructor(props){
		super(props);
		this.state={
			isChecked:false,
			etudiants:[],
			Seance:"",
			Module:"",
			AbsentId:[
				{id:""}
			]

		}
		this.componentDidMount=this.componentDidMount.bind(this);
		this.afficheEtudiants=this.afficheEtudiants.bind(this);
		this.handleClick=this.handleClick.bind(this);
		this.HandleInput=this.HandleInput.bind(this);


	}

	componentDidMount(){

		 axios.get('http://localhost:5001/etudiant/')
        .then(response=>{
            if(response.data.length > 0){
            	this.setState({
                    etudiants: response.data.map(etudiant=>etudiant)
                })
            }	
        })
        
		
	}

	afficheEtudiants(e){
        const listetudiants = this.state.etudiants;
        let Students=listetudiants.map((item,key)=>{
        	return( <tr key={key}>
				      <th scope="row">{item.matricule}</th>
				      <td>{item.nom}</td>
				      <td>{item.prenom}</td>
				      <td><input type="checkBox"  onChange={(e)=>{
				      	this.setState({isChecked:true});
				      	const id={id:item._id};
				      	this.state.AbsentId.push(id);
				      }}/></td>
				    </tr>
        		);
        	}
        )
		return Students;

	}
	HandleInput(e){
		const {name, value}= e.target;
		this.setState({ [name]:value });
		console.log(this.state.Seance);
		console.log(this.state.Module);
	}

	handleClick(e){
		console.log(this.state.AbsentId);
		for(let item in this.state.AbsentId){
			const id = item.id;
			console.log(item.id);
			
			/*const Absent={
			seance : this.state.Seance,
			 dateAb : new Date(),
		 	Module : this.state.Module
		    } 
		if (this.state.isChecked==true){
			console.log(Absent);
			axios.post(`http://localhost:5001//addAbsence/${id}`,Absent)
			.then(res=>console.log(res.data));
		}*/
		}
		

	}


	render()
	{
		return(
		  	<div id="wrapper">
    			<ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
      				<a className="sidebar-brand d-flex align-items-center justify-content-center" href="">
        				<div className="sidebar-brand-icon rotate-n-15">
        				</div>
        				<div className="sidebar-brand-text mx-3">ESTE</div>
      				</a>
      		    	<hr className="sidebar-divider my-0" />
      				<li className="nav-item active">
        				<a className="nav-link" href="index.html">
          				<span>Espace Prof</span></a>
      				</li>
      				<hr className="sidebar-divider" />
    			</ul>
			    <div id="content-wrapper" className="">
			      <div>
			      	<input type="text" placeholder="Module" name="Module" onChange={this.HandleInput}/>
			      	<input type="text" placeholder="Seance" name="Seance" onChange={this.HandleInput}/>
			      </div>
			      <div id="">
			      	<table className="table table-sm">
  						<thead>
	    					<tr>
		      					<th scope="col">#</th>
		      					<th scope="col">First</th>
		      					<th scope="col">Last</th>
		      					<th scope="col">Absent</th>
   					 		</tr>
 					 	</thead>
 					 	<tbody>
   					    {this.afficheEtudiants()}
 					 	</tbody>
					</table>

    			  </div>
    		    </div>
    		    <button onClick={this.handleClick}>valider</button>
  			</div>
		
		);
	}
}
export default Dashboard;