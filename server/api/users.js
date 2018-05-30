'use strict'
const router = require('express').Router()
const asyncHandler = require('express-async-handler')
const User = require('../db/models/User')

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const allUsers = await User.findAll()
    res.json(allUsers)
  })
)

router.get(
  '/:userId',
  asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.userId)
    res.json(user)
  })
)

router.post(
  '/',
  asyncHandler(async (req, res) => {
    const newUser = await User.create(req.body)
    res.status(201).json(newUser)
  })
)

router.put(
  '/:userId/edit',
  asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.userId)
    const updatedUser = user.update(req.body)
    res.status(204).json(updatedUser)
  })
)

router.delete(
  '/:userId',
  asyncHandler(async (req, res) => {
    await User.destroy({ where: { id: req.params.userId } })
    res.status(204)
  })
)

module.exports = router
