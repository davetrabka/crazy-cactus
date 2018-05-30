'use strict'
const db = require('../database')
const User = require('./User')
const Product = require('./Product')
const Review = require('./Review')
const Order = require('./Order')

Order.belongsToMany(Product, { through: 'orderMiddleMan' })
Product.belongsToMany(Order, { through: 'orderMiddleMan' })

User.hasMany(Order)
Order.belongsTo(User)

Review.belongsTo(Product)
Product.hasMany(Review)

Review.belongsTo(User)
User.hasMany(Review)

module.exports = {
  db,
  User,
  Product,
  Review,
  Order,
}
