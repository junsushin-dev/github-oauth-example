const GitHubStrategy = require('passport-github2').Strategy;
const { User } = require('./db');

const githubCallback = async (accessToken, refreshToken, profile, done) => {
  console.log(profile);
  const [{ 'value': email }] = profile.emails;
  const [{ 'value': photo }] = profile.photos;
  const name = profile.username;
  const authType = profile.provider;
  const userId = profile.id;
  const user = await User.findOrCreate({
    where: {
      authType,
      userId,
    },
    defaults: {
      userId,
      email,
      photo,
      name,
      authType,
    }
  });
  done(null, user);
};

const githubStrategy = new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: 'http://localhost:3000/users/github/callback',
}, githubCallback);

module.exports = githubStrategy;

