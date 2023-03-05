var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var session = require('express-session')
var passport = require('passport')
var bodyParser = require('body-parser')
var flash = require('connect-flash')
var MongoStore = require('connect-mongo')
// var logger = require('morgan')

var port = process.env.PORT || 3000

var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')

var db = require('./config/connect_db.js')
const { default: mongoose } = require('mongoose')

var app = express()

db.connect()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(flash())
app.use(
  session({
    secret: 'keyboard secret',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl:
        process.env.MONGODB_URL ||
        'mongodb+srv://foodyar:foodyar@cluster0.to3szhj.mongodb.net/foodyar',
    }),
    cookie: { maxAge: 180 * 60 * 1000 },
  })
)

app.use(function (req, res, next) {
  res.locals.session = req.session
  next()
})

require('./config/passport')(passport)

app.use(passport.initialize())
app.use(passport.session())

app.get('*', function (req, res, next) {
  res.locals.user = req.user || null
  next()
})

app.use('/', indexRouter)
app.use('/users', usersRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

app.listen(port, () => {
  console.log(`Server running: http://localhost:${port}/`)
})

module.exports = app
