module.exports = {
  // check login
  checkLogin: function checkLogin(req, res, next) {
    if (req.cookies.user) next();
    return res.redirect('/login');
  },
};
