const express = require('express');
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');
const path = require('path');
const bcrypt = require('bcryptjs');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
require('dotenv').config();

// MongoDB and Passport configuration
require('./config/db'); // Connects to MongoDB
require('./config/passport')(passport); // Configures Passport

const app = express();

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, JS, images, etc)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: 'secretkey',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Global variables accessible in templates
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error'); // Passport error messages
  res.locals.user = req.user || null;
  next();
});

// Routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const profileRoutes = require('./routes/profileRoutes');

app.use('/', authRoutes);
app.use('/', userRoutes);
app.use('/', productRoutes);
app.use('/', profileRoutes);

// Home route
app.get('/', (req, res) => res.render('index'));

// Server listen
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));
