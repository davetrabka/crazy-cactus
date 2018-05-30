import { combineReducers } from 'redux'

import usersReducer from './usersReducer'
import productsReducer from './productsReducer'
import reviewsReducer from './reviewsReducer'
import ordersReducer from './ordersReducer'

const rootReducer = combineReducers({
  users: usersReducer,
  products: productsReducer,
  reviews: reviewsReducer,
  orders: ordersReducer,
})

export default rootReducer
