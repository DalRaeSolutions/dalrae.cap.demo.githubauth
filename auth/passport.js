const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;

const GITHUB_CLIENT_ID = "e887fb40f47748707632" // or get from process.env.GITHUB_CLIENT_ID
const GITHUB_CLIENT_SECRET = "331a28aa5e0b582638b7e7191c437a7dc16b55bf" // or get from process.env.GITHUB_CLIENT_SECRET
const GITHUB_CALLBACK_URL = "http://localhost:4004/auth/github/callback" // or get from process.env.GITHUB_CALLBACK_URL

passport.serializeUser(function (user, done) {
  done(null, user);
});
passport.deserializeUser(function (user, done) {
  done(null, user);
});
passport.use(new GitHubStrategy({
  clientID: GITHUB_CLIENT_ID,
  clientSecret: GITHUB_CLIENT_SECRET,
  callbackURL: GITHUB_CALLBACK_URL
},
  function (accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }
));