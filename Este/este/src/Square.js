import React from 'react';
class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={function() { alert('thanks for the click'); }}>
        {this.props.value}
      </button>
    );
  }
}
export default Square;