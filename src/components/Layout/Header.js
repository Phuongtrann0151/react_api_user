import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Header.css';

export default function Footer(){
  return (
    <header>
      <nav class="navbar navbar-light bg-light justify-content-between">
        <a class="navbar-brand">Navbar</a>
        <form class="form-inline">
          <ul class="nav justify-content-center">
            <li class="nav-item">
              <a class="nav-link active" href="">Login</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">Register</a>
            </li>
          </ul>
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>
    </header>
  )
}