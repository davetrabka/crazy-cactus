'use strict'
const Sequelize = require('sequelize')
const db = require('../database')

module.exports = db.define('review', {
  rating: {
    type: Sequelize.DECIMAL(10, 1), // Single decimal
    allowNull: false,
    validate: { isDecimal: true },
  },

  reviewDetail: {
    type: Sequelize.TEXT,
  },
})
