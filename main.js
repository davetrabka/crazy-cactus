'use strict'
const { db } = require('./server/db/models')
const app = require('./server/index')
const PORT = 1887

db.sync({ force: false }).then(() => {
  console.log('db synced')
  app.listen(PORT, () =>
    console.log(`\n\n             http://localhost:${PORT}             \n\n`)
  )
})
