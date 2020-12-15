import React, {Component} from 'react';

class NavBar extends Component {
  state={};
  render(){
    return(
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <div className="navbar-brand">
          <h4>Product Analyser</h4> <span className="badge badge-pill badge-secondary">
          {this.props.totalCounters}</span>
          </div>
        </div>
      </nav>
    );
  }
}
export default NavBar;
