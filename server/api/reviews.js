'use strict'
const router = require('express').Router()
const asyncHandler = require('express-async-handler')
const Review = require('../db/models/Review')

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const allReviews = await Review.findAll()
    res.json(allReviews)
  })
)

router.post(
  '/',
  asyncHandler(async (req, res) => {
    const newReview = await Review.create(req.body)
    res.status(201).json(newReview)
  })
)

router.get(
  '/:reviewId',
  asyncHandler(async (req, res) => {
    const review = await Review.findById(req.params.reviewId)
    res.json(review)
  })
)

router.put(
  '/:reviewId/edit',
  asyncHandler(async (req, res) => {
    const review = await Review.findById(req.params.reviewId)
    const updatedreview = review.update(req.body)
    res.status(204).json(updatedreview)
  })
)

router.delete(
  '/:reviewId',
  asyncHandler(async (req, res) => {
    await Review.destroy({ where: { id: req.params.reviewId } })
    res.status(204)
  })
)

module.exports = router
