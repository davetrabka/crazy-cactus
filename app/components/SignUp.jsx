/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class SignUp extends Component {
  render() {
    return (
      <div className="row floating-container">
        <main className="col s12 m6 l12">
          <h2 className="float-header teal-text text-darken-3 center">
            Sign On Up!
          </h2>
        </main>
      </div>
    )
  }
}

const mapDispatch = dispatch => ({})

export default connect(null, mapDispatch)(SignUp)
