'use strict'
const router = require('express').Router()
const asyncHandler = require('express-async-handler')
const Order = require('../db/models/Order')

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const allOrders = await Order.findAll()
    res.json(allOrders)
  })
)

router.post(
  '/',
  asyncHandler(async (req, res) => {
    const newOrder = await Order.create(req.body)
    res.status(201).json(newOrder)
  })
)

router.get(
  '/:orderId',
  asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.orderId)
    res.json(order)
  })
)

router.delete(
  '/:orderId',
  asyncHandler(async (req, res) => {
    await Order.destroy({ where: { id: req.params.orderId } })
    res.status(204)
  })
)

module.exports = router
