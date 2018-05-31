/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class SignUp extends Component {
  render() {
    return (
      <div className="floating-container">
        <h2 className="float-header teal-text text-darken-3 center">
          Sign Me Up!
        </h2>
        <div className="row">
          <form>
            <div className="row">
              <div className="col s1" />
              <div className="input-field col s3">
                <label htmlFor="firstName" className="active">
                  First Name
                </label>
                <input name="firstName" type="text" className="validate" />
              </div>
              <div className="input-field col s3">
                <input id="lastName" type="text" className="validate" />
                <label htmlFor="lastName" className="active">
                  Last Name
                </label>
              </div>
              <div className="input-field col s4">
                <input id="email" type="email" className="validate" />
                <label htmlFor="email" className="active">
                  Email
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col s1" />
              <div className="input-field col s5">
                <input name="streetAddress" type="text" className="validate" />
                <label htmlFor="streetAddress" className="active">
                  Street Address
                </label>
              </div>
              <div className="input-field col s3">
                <input id="city" type="text" className="validate" />
                <label htmlFor="city" className="active">
                  City
                </label>
              </div>
              <div className="input-field col s1">
                <input id="state" type="text" className="validate" />
                <label htmlFor="state" className="active">
                  State
                </label>
              </div>
              <div className="input-field col s1">
                <input id="zipCode" type="text" className="validate" />
                <label htmlFor="zipCode" className="active">
                  Zip
                </label>
              </div>
            </div>
            <br />
            <br />
            <div className="row">
              <div className="col s1" />
              <div className="input-field col s4">
                <input id="username" type="text" className="validate" />
                <label htmlFor="username" className="active">
                  Username
                </label>
              </div>
              <div className="input-field col s4">
                <input id="password" type="text" className="validate" />
                <label htmlFor="password" className="active">
                  Password
                </label>
              </div>
            </div>
          </form>
          <br />
          <br />
          <br />
          <div className="error-container">
            <Link
              to="/"
              className="col s2 btn-large waves-effect waves-light teal">
              Submit
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatch = dispatch => ({})

export default connect(null, mapDispatch)(SignUp)
