const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const { GITHUB_CALLBACK_URL, GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET, VERCEL_URL } = process.env;

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

passport.use(new GitHubStrategy({
  clientID: GITHUB_CLIENT_ID,
  clientSecret: GITHUB_CLIENT_SECRET,
  callbackURL: `${VERCEL_URL}${GITHUB_CALLBACK_URL}`
},
  function (accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }
));