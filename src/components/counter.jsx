import React, {Component} from 'react';

class Counter extends Component {
// state={
// count: this.props.counter.value
// };


// handleIncrement=()=>{
//   this.setState({value : this.state.value + 1});
// };
render(){
  return(
    <div>
      <h1 className={this.getBadgeClasses()}>
        {this.formatCount()}
      </h1>

      <button onClick={()=>this.props.onIncrement(this.props.counter)}
      className="btn btn-secondary btn-sm">
        Increment
      </button>

      <button onClick={()=>this.props.onDelete(this.props.counter.id)}
      className="btn btn-danger btn-sm m-2"> Delete </button>
    </div>
  );
  }

getBadgeClasses(){
  let classes= "badge m-2 "
  classes += (this.props.counter.value===0) ? "badge-warning" : "badge-primary";
  return classes;
}

formatCount(){
  const {value}= this.props.counter;
  return value===0 ? 'Zero': value;
}
}
export default Counter;
