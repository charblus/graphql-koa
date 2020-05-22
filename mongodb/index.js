import mongoose from 'mongoose'
import config from '../config'

require('./schema/list')
require('./schema/info')
require('./schema/student')
require('./schema/course')

export const database = () => {
  mongoose.set('debug', true)

  mongoose.connect(config.dbPath, {useNewUrlParser:true})

  mongoose.connection.on('disconnected', () => {
    mongoose.connect(config.dbPath, {useNewUrlParser:true})
  })
  mongoose.connection.on('error', err => {
    console.error(err)
  })

  mongoose.connection.on('open', async () => {
    console.log('Connected to MongoDB ', config.dbPath)
  })
}
