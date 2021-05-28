import React, { Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Header.css';

export default class Header extends React.Component {
  constructor(props){
    super(props);
    this.handleRegisterClick = this.handleRegisterClick.bind(this)
    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.state = { isLoggedIn: false }
  }
  handleLoginClick(){
    this.setState({isLoggedIn: false})
  }
  handleRegisterClick(){
    this.setState({isLoggedIn: true})
  }
  render(){
    const isLoggedIn = this.state.isLoggedIn;
    return (
      <header>
        <nav class="navbar navbar-light bg-light justify-content-between" >
          <a class="navbar-brand">ReactJS App</a>
          <form class="form-inline" onSubmit={this.handleClick}>
            <ul class="nav justify-content-center">
              <li class="nav-item">
                <a class="nav-link active" href="" onClick={this.handleLoginClick}>Login</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="" onClick={this.handleRegisterClick}>Register</a>
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