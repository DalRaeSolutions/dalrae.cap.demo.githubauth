const cds = require("@sap/cds");

console.log('[auth]', 'loading custom auth handler')

/**
 * Overwriting the standard auth function and letting the custom 
 * Passport strategy take the wheel
 * @param {Request} req 
 * @param {Response} res 
 * @param {function} next 
 */
module.exports = (req, res, next) => {
  console.log('[auth] - ', 'user defined?',  !!req.user);
  if (req.user) {
    req.user = new cds.User(req?.user)
    next()
  } else {
    res.status(401).send();
  }
}