require('dotenv').config()

const mongodb = require('mongoose')
const URL = process.env.MONGODB_URI

mongodb.connect(URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false    
})

const connection = mongodb.connection

connection.once('open', () => {
    console.log('DataBase is connected')
})