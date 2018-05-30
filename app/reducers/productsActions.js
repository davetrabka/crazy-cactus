'use strict'
import axios from 'axios'

export const PRODUCT = {
  GOT_ALL: 'GOT_ALL',
  GOT_ONE: 'GOT_ONE',
  CREATED: 'CREATED',
  EDITED: 'EDITED',
  DELETED: 'DELETED',
}

export const gotAllProducts = allProducts => ({
  type: PRODUCT.GOT_ALL,
  allProducts,
})
export const gotOneProduct = product => ({
  type: PRODUCT.GOT_ONE,
  product,
})
export const createdProduct = product => ({
  type: PRODUCT.CREATED,
  product,
})
export const editedProduct = product => ({
  type: PRODUCT.EDITED,
  product,
})
export const deletedProduct = productId => ({
  type: PRODUCT.DELETED,
  productId,
})

export const getAllProducts = () => async dispatch => {
  try {
    const { data } = await axios.get('/api/products')
    dispatch(gotAllProducts(data))
  } catch (error) {
    console.error(error)
  }
}

export const getOneProduct = productId => async dispatch => {
  try {
    const { data } = await axios.get(`/api/products/${productId}`)
    dispatch(gotOneProduct(data))
  } catch (error) {
    console.error(error)
  }
}

export const createProduct = product => async dispatch => {
  try {
    const { data } = await axios.post('/api/products/', product)
    dispatch(createdProduct(data))
    return data
  } catch (error) {
    console.error(error)
  }
}

export const editProduct = product => async dispatch => {
  try {
    const { data } = await axios.put(`/api/products/${product.id}`, product)
    dispatch(editedProduct(data))
    return data
  } catch (error) {
    console.error(error)
  }
}

export const deleteProduct = productId => async dispatch => {
  try {
    const { data } = await axios.delete(`/api/products/${productId}`)
    dispatch(deletedProduct(data))
    return data
  } catch (error) {
    console.error(error)
  }
}
