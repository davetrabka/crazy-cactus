/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import ProductCard from './ProductCard'
import { getAllProducts } from '../reducers/productsActions'

class ProductList extends Component {
  constructor() {
    super()
    this.state = {
      filter: '',
    }
  }

  async componentDidMount() {
    await this.props.getAllProducts()
  }

  render() {
    if (this.props.productsLoading) {
      return (
        <div className="floating-container error-container">
          <h2 className="float-header teal-text text-darken-3 center">
            Sorry this is taking so long...
          </h2>
        </div>
      )
    }

    const productsList = this.props.allProducts

    return (
      <div className="row floating-container">
        <div className="col s12 m4 l2">
          <div className="floating-side-nav center">
            <div className="card-panel teal white-text center">
              <h3 className="floating-nav-title">Filter Results</h3>
              <ul>
                <br />
                <li className="side-nav-li">
                  <Link
                    to="/"
                    className="btn-small waves-effect waves-light teal lighten-3 white-text z-depth-0">
                    All Products
                  </Link>
                </li>
                <li className="side-nav-li">
                  <Link
                    to="/"
                    className="btn-small waves-effect waves-light teal lighten-3 white-text z-depth-0">
                    PLACEHOLDER 1
                  </Link>
                </li>
                <li className="side-nav-li">
                  <Link
                    to="/"
                    className="btn-small waves-effect waves-light teal lighten-3 white-text z-depth-0">
                    PLACEHOLDER 2
                  </Link>
                </li>
                <li className="side-nav-li">
                  <Link
                    to="/"
                    className="btn-small waves-effect waves-light teal lighten-3 white-text z-depth-0">
                    PLACEHOLDER 3
                  </Link>
                </li>
                <li className="side-nav-li">
                  <Link
                    to="/"
                    className="btn-small waves-effect waves-light teal lighten-3 white-text z-depth-0">
                    PLACEHOLDER 4
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <main className="col s12 m8 l10">
          <h2 className="float-header teal-text text-darken-3 center">
            All Products
          </h2>
          <ul className="products-box">
            {productsList.map(product => (
              <ProductCard product={product} key={product.id} />
            ))}
          </ul>
        </main>
      </div>
    )
  }
}

const mapState = state => ({
  allProducts: state.products.allProducts,
  productsLoading: state.products.productsLoading,
})

const mapDispatch = dispatch => ({
  getAllProducts: () => dispatch(getAllProducts()),
})

export default connect(mapState, mapDispatch)(ProductList)
