'use strict'
import axios from 'axios'

export const REVIEW = {
  GOT_ALL: 'GOT_ALL',
  GOT_ONE: 'GOT_ONE',
  CREATED: 'CREATED',
  EDITED: 'EDITED',
  DELETED: 'DELETED',
}

export const gotAllReviews = allReviews => ({
  type: REVIEW.GOT_ALL,
  allReviews,
})
export const gotOneReview = review => ({
  type: REVIEW.GOT_ONE,
  review,
})
export const createdReview = review => ({
  type: REVIEW.CREATED,
  review,
})
export const editedReview = review => ({
  type: REVIEW.EDITED,
  review,
})
export const deletedReview = reviewId => ({
  type: REVIEW.DELETED,
  reviewId,
})

export const getAllReviews = () => async dispatch => {
  try {
    const { data } = await axios.get('/api/reviews')
    dispatch(gotAllReviews(data))
  } catch (error) {
    console.error(error)
  }
}

export const getOneReview = reviewId => async dispatch => {
  try {
    const { data } = await axios.get(`/api/reviews/${reviewId}`)
    dispatch(gotOneReview(data))
  } catch (error) {
    console.error(error)
  }
}

export const createReview = review => async dispatch => {
  try {
    const { data } = await axios.post('/api/reviews/', review)
    dispatch(createdReview(data))
    return data
  } catch (error) {
    console.error(error)
  }
}

export const editReview = review => async dispatch => {
  try {
    const { data } = await axios.put(`/api/reviews/${review.id}`, review)
    dispatch(editedReview(data))
    return data
  } catch (error) {
    console.error(error)
  }
}

export const deleteReview = reviewId => async dispatch => {
  try {
    const { data } = await axios.delete(`/api/reviews/${reviewId}`)
    dispatch(deletedReview(data))
    return data
  } catch (error) {
    console.error(error)
  }
}
