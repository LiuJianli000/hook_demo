import React, { Component } from 'react';

class Count extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      count: 0
     }
  }

  handleCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  
  render() { 
    return ( 
      <>
        <p>You click {this.state.count}</p>
        <button onClick={this.handleCount}>click me</button>
      </>
     );
  }
}
 
export default Count;