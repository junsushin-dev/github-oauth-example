var express = require('express');
var router = express.Router();
const passport = require('../services/passportServices');

router.get('/github', passport.authenticate('github'));

router.get('/github/callback', 
  passport.authenticate('github', { failureRedirect: '/', session: false }),
  (req, res) => res.render('oauth', { token: 'mytoken' }),
);

router.get('/apple');

router.get('/apple/callback');

module.exports = router;
