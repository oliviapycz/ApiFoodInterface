const express = require('express')
const bodyParser = require('body-parser')
const passport = require('passport')
const cors = require('cors')
const routes = require('./routes/index')
// const errorHandlers = require('./handlers/errorHandlers')


// create our Express app
const app = express();

// enable CORS
app.use(cors());

// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport JS is what we use to handle our logins
app.use(passport.initialize());
app.use(passport.session());

// promisify some callback based APIs
// app.use((req, res, next) => {
// req.login = promisify(req.login, req);
// next();
// });

// After all that above middleware, we finally handle our own routes!
app.use('/', routes);

// If that above routes didnt work, we 404 them and forward to error handler
// app.use(errorHandlers.notFound);

// Otherwise this was a really bad error we didn't expect! Shoot eh
// if (app.get('env') === 'development') {
//     /* Development Error Handler - Prints stack trace */
//     app.use(errorHandlers.developmentErrors);
//   }
  
  // production error handler
//   app.use(errorHandlers.productionErrors);

// done! we export it so we can start the site in start.js
module.exports = app;