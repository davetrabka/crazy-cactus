/* eslint-disable react/prefer-stateless-function*/
import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import NavBar from './NavBar'
import LandingPage from './LandingPage'
import ProductList from './ProductList'

export default class Root extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/products" component={ProductList} />
          </Switch>
        </main>
      </React.Fragment>
    )
  }
}
