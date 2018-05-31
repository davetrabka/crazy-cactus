/* eslint-disable react/prefer-stateless-function*/
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavBar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav id="nav-bar" className="teal" role="navigation">
          <div className="nav-wrapper container">
            <ul className="left hide-on-med-and-down">
              <li>
                <Link to="/" className="white-text">
                  <i id="home-icon" className="material-icons">
                    home
                  </i>
                </Link>
              </li>
              <li>
                <Link to="/products" className="white-text">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/locations" className="white-text">
                  Locations
                </Link>
              </li>
            </ul>
            <ul className="right hide-on-med-and-down">
              <li>
                <Link to="/users/new" className="white-text">
                  Sign Up
                </Link>
              </li>
              <li>
                <Link to="/users/login" className="white-text">
                  Log In
                </Link>
              </li>
              <li>
                <Link to="/users" className="white-text">
                  <i className="material-icons">shopping_cart</i>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default NavBar
