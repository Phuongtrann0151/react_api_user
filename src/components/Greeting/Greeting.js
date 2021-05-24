import React, {Component} from 'react';

class Greeting extends Component {
  constructor(props){
    super(props)
    this.state = { message: 'Hello' }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    alert(this.state.message)
  }

  render(){
    return(
      <button onClick={this.handleClick}>Say Hello</button>
    );
  }
}

export default Greeting;