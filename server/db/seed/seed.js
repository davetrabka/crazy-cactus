'use strict'
const { db, User, Product, Review, Order } = require('../models')
const userData = require('./userData')
const productData = require('./productData')
const reviewData = require('./reviewData')
const orderData = require('./orderData')

const randomNum = (min, max) => Math.random() * (max - min) + min

const seedScript = async () => {
  try {
    await db.sync({ force: true })

    const seedProducts = Product.bulkCreate(productData, { returning: true })

    const seedUsers = User.bulkCreate(userData, { returning: true })

    // Seeds reviews, assigns user (reviewer) by ID, & assigns to random product
    const seedReviews = Review.bulkCreate(
      reviewData.map(review => ({
        ...review,
        userId: Math.floor(randomNum(1, userData.length + 1)),
        productId: Math.floor(randomNum(1, productData.length + 1)),
      }))
    )

    // Seeds orders, assigns user (buyer) by ID, & assigns three random products by ID
    const seedOrders = Order.bulkCreate(
      orderData.map(order => ({
        ...order,
        userId: Math.floor(randomNum(1, userData.length + 1)),
        productIds: [
          Math.floor(randomNum(1, productData.length + 1)),
          Math.floor(randomNum(1, productData.length + 1)),
          Math.floor(randomNum(1, productData.length + 1)),
        ],
      }))
    )

    await Promise.all([seedProducts, seedUsers, seedReviews, seedOrders])
    console.log('Database successfully seeded.')
  } catch (error) {
    console.error(error)
  } finally {
    db.close()
    console.log('Database connection closed.')
  }
}

seedScript()
