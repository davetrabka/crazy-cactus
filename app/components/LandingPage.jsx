/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class LandingPage extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="index-banner" className="parallax-container">
          <div className="section no-pad-bot">
            <div className="container">
              <div className="row">
                <h1 className="header white-text landing-title">
                  The Crazy Cactus
                </h1>
                <h3 className="header col s12 light blue-grey-text text-lighten-5">
                  Cacti, Succulents, & Some Other Cool Stuff, too.
                </h3>
              </div>
              <br />
              <div className="row">
                <Link
                  to="/products"
                  className="btn-large  waves-effect waves-light teal lighten-2">
                  Our Products
                </Link>
                <Link
                  to="/"
                  className="btn-large waves-effect waves-light teal lighten-2">
                  Come Visit Us
                </Link>
              </div>
              <br />
              <br />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default LandingPage
