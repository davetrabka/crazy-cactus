'use strict'
import { REVIEW } from './reviewsActions'

const initialState = {
  allReviews: [],
  reviewsLoading: true,
  selectedReview: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case REVIEW.GOT_ALL: {
      return {
        allReviews: [action.reviews],
        reviewsLoading: false,
      }
    }
    case REVIEW.GOT_ONE: {
      return {
        ...state,
        selectedReview: action.review,
      }
    }
    case REVIEW.CREATED: {
      return {
        ...state,
        allReviews: [...state.allReviews, action.review],
      }
    }
    case REVIEW.EDITED: {
      return {
        ...state,
        allReviews: [
          ...state.allReviews.map(
            review => (review.id !== action.review.id ? action.review : review)
          ),
        ],
      }
    }
    case REVIEW.DELETED: {
      return {
        ...state,
        allReviews: [
          ...state.allReviews.filter(review => review.id !== action.reviewId),
        ],
      }
    }
    default: {
      return state
    }
  }
}
