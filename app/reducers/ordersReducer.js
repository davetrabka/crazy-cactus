'use strict'
import { ORDER } from './ordersActions'

const initialState = {
  allOrders: [],
  ordersLoading: true,
  selectedOrder: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ORDER.GOT_ALL: {
      return {
        allOrders: [action.orders],
        ordersLoading: false,
      }
    }
    case ORDER.GOT_ONE: {
      return {
        ...state,
        selectedOrder: action.order,
      }
    }
    case ORDER.CREATED: {
      return {
        ...state,
        allOrders: [...state.allOrders, action.order],
      }
    }
    case ORDER.ARCHIVED: {
      return {
        ...state,
        allOrders: [
          ...state.allOrders.filter(order => order.id !== action.orderId),
        ],
      }
    }
    default: {
      return state
    }
  }
}
