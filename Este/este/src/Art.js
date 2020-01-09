import React from 'react';
class Art extends React.Component{
getStyle=()=>
{
	return{ 
	padding:"10px",
	backgroundColor:this.props.item.id==2?'blue':'#ccc',
	borderButtom:'1px #ccc dotted'
}
	
}
render()
{

	const {id,titre,src,vote,txt}=this.props.item;
	return(
					<div style={this.getStyle()}class="col-sm-4"> 
      				<p><h3>{titre}</h3> <br/>{txt}</p>
     				<img src={src} className="img-responsive"  />
     				<input onClick={this.props.markVote.bind(this,id)} type="submit" value={vote}/>
   					</div>
		);
}


}
export default Art;