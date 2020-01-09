import React from 'react';
const st=
{
	liststyletype:'none',
	 display:'inline'
}
class Item extends React.Component
{
		
	render()
	{
		const elems =this.props.ttt;
		const tab = elems.map(elem =>
		{
			return(
				<li>
				<img src={elem.src}/>
				<p>{elem.id}</p>
				<p>{elem.name}</p>
				<p>{elem.Niveau}</p>
				</li>);
		});

		return (<ul style={st}>
		{tab}
		</ul>);

		
	}
}
export default Item;
