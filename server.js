const bodyParser = require('body-parser');
const cors = require('cors');
const errorhandler = require('errorhandler');
const express = require('express');

const apiRouter = require('./api/api');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

app.use('/api', apiRouter);

app.use(errorhandler());

//app.use(morgan('dev')); // log every request to the console
//app.use(cookieParser()); // read cookies (needed for auth)
//const passport = require('passport');
//const flash = require('connect-flash');
//const morgan = require('morgan');
//const cookieParser = require('cookie-parser');
//const session = require('express-session');


// require('./config/passport')(passport); // pass passport for configuration

// required for passport
/*app.use(session({ secret: 'fcmrulz' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================
require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport
app.use('/api', apiRouter);*/


app.listen(PORT, () => {
  console.log('Listening on port: ' + PORT);
});

module.exports = app;
