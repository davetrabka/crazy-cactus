'use strict'
const router = require('express').Router()
const asyncHandler = require('express-async-handler')
const Product = require('../db/models/Product')

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const allProducts = await Product.findAll()
    res.json(allProducts)
  })
)

router.post(
  '/',
  asyncHandler(async (req, res) => {
    const newProduct = await Product.create(req.body)
    res.status(201).json(newProduct)
  })
)

router.get(
  '/:productId',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.productId)
    res.json(product)
  })
)

router.put(
  '/:productId/edit',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.ProductId)
    const updatedProduct = product.update(req.body)
    res.status(204).json(updatedProduct)
  })
)

router.delete(
  '/:productId',
  asyncHandler(async (req, res) => {
    await Product.destroy({ where: { id: req.params.productId } })
    res.status(204)
  })
)

module.exports = router
