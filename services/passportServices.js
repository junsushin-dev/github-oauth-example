const passport = require('passport');
// const appleStrategy = require('./apple-oauth');
const githubStrategy = require('./github-oauth');

passport.use(githubStrategy);
// passport.use(appleStrategy);

module.exports = passport;