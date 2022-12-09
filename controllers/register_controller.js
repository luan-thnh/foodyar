function index(req, res, next) {
  res.render('pages/register/index', { title: 'Foodyar || Register' });
}

module.exports = { index };
