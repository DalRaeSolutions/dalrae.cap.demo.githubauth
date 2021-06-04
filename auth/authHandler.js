const cds = require("@sap/cds");

/**
 * Overwriting the standard auth function and letting the custom 
 * Passport strategy take the wheel
 * @param {Request} req 
 * @param {Response} res 
 * @param {function} next 
 */
module.exports = (req, res, next) => {
  console.log('user', req?.user?.id)
  req.user = new cds.User(req?.user)
  if (req.user) {
    next()
    //res.status(401).send('Not Logged In');
  } else {
    res.status(401);
  }
}