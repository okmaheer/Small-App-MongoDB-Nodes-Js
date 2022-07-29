exports.getLogin = (req, res, next) => {
//  const isLoggedIn = req.get('Cookie').split(';')[1].trim().split('=')[1].trim() === 'true';
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: false
  });
};

exports.postLogin = (req, res, next) => {
  console.log("login daa");
  req.session.isLoggedIn = true;  
  res.redirect('/');
  };
