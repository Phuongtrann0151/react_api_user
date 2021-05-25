import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Header.css';

export default class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      words: [],
      text: ''
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleClick(e){
    e.preventDefault();
    const allWords = {
      text: this.state.text,
      id: Date.now()
    }
    this.setState(state => ({
      words: state.items.concat(allWords),
      text: ''
    }))
  }
  handleChange(e){
    this.setState({ text: e.target.value })
  }
  render(){
    return (
      <header>
        <nav class="navbar navbar-light bg-light justify-content-between" words={this.state.items}>
          <a class="navbar-brand">My App</a>
          <form class="form-inline" onSubmit={this.handleClick}>
            <ul class="nav justify-content-center">
              <li class="nav-item">
                <a class="nav-link active" href="">Login</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="">Register</a>
              </li>
            </ul>
            <input class="form-control mr-sm-2" type="search" placeholder="Type in some words!" value={this.state.text} onChange={this.handleChange} />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Submit</button>
          </form>
        </nav>
      </header>
    )
  }
}