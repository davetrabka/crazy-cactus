'use strict'
const Sequelize = require('sequelize')
const db = require('../database')

module.exports = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true },
  },

  imgUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'https://www.cmsabirmingham.org/stuff/2017/01/default-placeholder.png',
  },

  price: {
    type: Sequelize.DECIMAL(10, 2), // Decimal to two places
    allowNull: false,
    validate: { notEmpty: true },
  },

  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    defaultValue: 'No description yet!',
    validate: { notEmpty: true },
  },

  categories: {
    type: Sequelize.STRING,
    defaultValue: 'new',
  },
})
