/* eslint-disable */
require('dotenv').config()
const express = require('express')
const path = require('path')
const helmet = require('helmet')
const cors = require('cors')
const favicon = require('serve-favicon')
const logger = require('morgan')
const compression = require('compression')

const app = express()
/* if want to check dotenv */
// const PORT = process.env.PORT
// const NODE_ENV = process.env.NODE_ENV
// const API_PATH = process.env.API_PATH

app.use(favicon(path.join(__dirname, 'dist', 'favicon.ico')))
app.use(logger('dev'))
app.use(helmet())
app.use(cors())
app.use(compression())

// the __dirname is the current directory from where the script is running
app.use(express.static(path.join(__dirname, 'dist')))

// send the user to index html page inspite of the url
app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'dist/index.html'))
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found')
	err.status = 404
	next(err)
})

// error handler
app.use(function(err, req, res) {
	// set locals, only providing error in development
	res.locals.message = err.message
	res.locals.error = req.app.get('env') === 'development' ? err : {}

	// render the error page
	res.status(err.status || 500)
	res.render('error')
})

// Set Port
app.set('port', (process.env.PORT || 8080));

app.listen(app.get('port'), function(){
  console.log('Server started on port '+app.get('port'));
  /* console the process.env */
  // console.log('Server started proxy '+API_PATH);
  // console.log('Server started on port '+PORT);
  // console.log('Server started on mode '+NODE_ENV);
});
