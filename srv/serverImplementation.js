/* eslint-disable no-unused-vars */
const passport = require('passport');
const cookieSession = require('cookie-session')
require('../auth/passport')

module.exports = async (app) => {
  app.use(cookieSession({
    name: 'github-auth-session',
    keys: ['key1', 'key2']
  }))
  app.use(passport.initialize());
  app.use(passport.session());

  /**
   * Added for the purpose of oAuth example
   */
  app.get('/auth/error', (_req, res) => res.send('Unknown Error'))
  app.get('/auth/logout', (req, res) => {
    req.session = null;
    req.logout();
    res.redirect('/');
  })
  app.get('/auth/my-user', (req, res) => {
    res.json(req?.user?._json)
  })
  app.get('/auth/github', passport.authenticate('github', { scope: ['user:email'] }));
  app.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/auth/error' }),
    function (_req, res) {
      res.redirect('/');
    });
}
