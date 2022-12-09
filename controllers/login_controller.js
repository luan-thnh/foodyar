function index(req, res, next) {
  res.render('pages/login/index', { title: 'Foodyar || Login' });
}

module.exports = { index };
