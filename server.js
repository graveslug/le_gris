//============================//
//      Dependencies          //
//============================//
require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = process.env.PORT || 3000
const mongoose = require('mongoose')
const logger = require('morgan')
const methodOverride = require('method-override')

//============================//
//   Database & connections   //
//============================//
const MONGODB_URI = process.env.MONGODB_URI
const db = mongoose.connection

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

//checks error&&success
db.on('error', (err) => console.log(err.message + 'Is mongodb not running?'))
db.on('connected', ()=> console.log('Your mongod has connected'))
db.on('disconnected', ()=> console.log('Your mongod has disconnected'))

//opens connection to mongod
db.on('open', ()=>{})

//============================//
//     Routes assigned        //
//============================//
const adminRoutes = require('./routes/admin')
const storeRoutes = require('./routes/store')
const userRoutes = require('./routes/user')

//============================//
//        MiddleWare          //
//============================//
app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(methodOverride('_method'))
app.use(logger('dev'))

//============================//
//         Routes             //
//============================//
app.use('/store', storeRoutes)
// app.use('/user', userRoutes)
// app.use('/admin', adminRoutes)

//============================//
//         404 errors         //
//============================//
app.use((req, res, next) => {
    const error = new Error('Path not Found')
    error.status = 404
    next(error)
})
//============================//
//      error handler         //
//============================//
app.use((err, req, res, next) => {
    const error = app.get('env') === 'developement' ? err : {}
    const status = error.status || 500
    //respond to client
    res.status(status).json({
        error: {
            message: error.message
        }
    })
    //respond to ourselves
    console.log(error)
})

//============================//
//             PORT           //
//============================//
app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>')
})

app.listen(PORT)
