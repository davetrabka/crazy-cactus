'use strict'
const Sequelize = require('sequelize')
const db = require('../database')

module.exports = db.define('user', {
  isAdmin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },

  username: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isAlphanumeric: true,
    },
  },

  password: {
    type: Sequelize.STRING,
  },

  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isAlpha: true,
    },
  },

  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isAlpha: true,
    },
  },

  email: {
    type: Sequelize.STRING,
    validate: { isEmail: true },
  },

  streetAddress: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  city: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  state: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  zipCode: {
    type: Sequelize.STRING,
    allowNull: false,
  },
})
