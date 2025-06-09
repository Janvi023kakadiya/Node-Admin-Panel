const passport = require('passport');

exports.getLogin = (req, res) => {
  res.render('login');
};

exports.postLogin = passport.authenticate('local', {
  successRedirect: '/user/dashboard',
  failureRedirect: '/login',
  failureFlash: true,
});

exports.logout = (req, res) => {
  req.logout(() => {
    res.redirect('/login');
  });
}