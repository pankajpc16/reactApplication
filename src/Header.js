import React from 'react';

class Header extends React.Component {
  constructor(){
    super();
    this.state={color:"red"}
  }

    render() {
      return (
        <div className="container text-left">
          <h2>Hi, I am Header {this.state.color}</h2>
        </div>
      )
    }
  }

export default Header;