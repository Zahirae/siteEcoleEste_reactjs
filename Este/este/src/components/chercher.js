import React from 'react';
const style={
	float:'right',
	width: '100%',
};
const btn={
	boxshadow: 'none'
}
class Chercher extends React.Component
{
	state={
		name:''
	}
	handleChange=(e)=>
	{
	this.setState({
	name:e.target.value
	})
	}
	render()
	{
		return(
			<form  style={style}>
			<h3>What Would you like to Search ?</h3>
			<input type='text'  onChange={this.handleChange} />
			<button style={btn}>Chercher</button>
			</form>
			);
	}
}
export default Chercher;
