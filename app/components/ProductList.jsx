/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import { connect } from 'react-redux'

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
            Sorry, this is taking longer than it should...
          </h2>
        </div>
      )
    }

    const productsList = this.props.allProducts

    return (
      <div className="floating-container">
        <h2 className="float-header teal-text text-darken-3 center">
          All Products
        </h2>
        <ul className="products-box">
          {productsList.map(product => (
            <ProductCard product={product} key={product.id} />
          ))}
        </ul>
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
