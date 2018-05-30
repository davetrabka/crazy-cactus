'use strict'
import axios from 'axios'

export const ORDER = {
  GOT_ALL: 'GOT_ALL',
  GOT_ONE: 'GOT_ONE',
  CREATED: 'CREATED',
  EDITED: 'EDITED',
  ARCHIVED: 'ARCHIVED',
}

export const gotAllOrders = allOrders => ({
  type: ORDER.GOT_ALL,
  allOrders,
})
export const gotOneOrder = order => ({
  type: ORDER.GOT_ONE,
  order,
})
export const createdOrder = order => ({
  type: ORDER.CREATED,
  order,
})
export const archivedOrder = orderId => ({
  type: ORDER.ARCHIVED,
  orderId,
})

export const getAllOrders = () => async dispatch => {
  try {
    const { data } = await axios.get('/api/orders')
    dispatch(gotAllOrders(data))
  } catch (error) {
    console.error(error)
  }
}

export const getOneOrder = orderId => async dispatch => {
  try {
    const { data } = await axios.get(`/api/orders/${orderId}`)
    dispatch(gotOneOrder(data))
  } catch (error) {
    console.error(error)
  }
}

export const createOrder = order => async dispatch => {
  try {
    const { data } = await axios.post('/api/orders/', order)
    dispatch(createdOrder(data))
    return data
  } catch (error) {
    console.error(error)
  }
}

export const archiveOrder = orderId => async dispatch => {
  try {
    const { data } = await axios.delete(`/api/orders/${orderId}`)
    dispatch(archivedOrder(data))
    return data
  } catch (error) {
    console.error(error)
  }
}
