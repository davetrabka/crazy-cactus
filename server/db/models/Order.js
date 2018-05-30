'use strict'
const Sequelize = require('sequelize')
const db = require('../database')

module.exports = db.define('order', {
  totalPrice: {
    type: Sequelize.DECIMAL(10, 1), // Single decimal
    allowNull: false,
  },

  shippingPrice: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: '4.99',
  },

  productIds: {
    type: Sequelize.ARRAY(Sequelize.INTEGER),
  },

  paymentMethod: {
    type: Sequelize.STRING,
    allowNull: false,
  },
})
