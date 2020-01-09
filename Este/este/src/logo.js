import React from 'react';

const img1 ={
  width: "100%",
  height: "auto"
}
class Logo extends React.Component
{

	render()
	{
		return (<img style={img1} src={this.props.src} />);
	}
}
export default Logo;