'use strict'
import { PRODUCT } from './productsActions'

const initialState = {
  allProducts: [],
  productsLoading: true,
  selectedProduct: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT.GOT_ALL: {
      return {
        allProducts: action.allProducts,
        productsLoading: false,
      }
    }
    case PRODUCT.GOT_ONE: {
      return {
        ...state,
        selectedProduct: action.product,
      }
    }
    case PRODUCT.CREATED: {
      return {
        ...state,
        allProducts: [...state.allProducts, action.product],
      }
    }
    case PRODUCT.EDITED: {
      return {
        ...state,
        allProducts: [
          ...state.allProducts.map(
            product =>
              product.id !== action.product.id ? action.product : product
          ),
        ],
      }
    }
    case PRODUCT.DELETED: {
      return {
        ...state,
        allProducts: [
          ...state.allProducts.filter(
            product => product.id !== action.productId
          ),
        ],
      }
    }
    default: {
      return state
    }
  }
}
