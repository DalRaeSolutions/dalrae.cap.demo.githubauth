const cds = require("@sap/cds");

/**
 * Overwriting the standard auth function and letting the custom 
 * Passport strategy take the wheel
 * @param {Request} req 
 * @param {Response} res 
 * @param {function} next 
 */
module.exports = (req, res, next) => {
  if (req.user) {
    req.user = new cds.User(req?.user)
    next()
  } else {
    res.status(401);
  }
}