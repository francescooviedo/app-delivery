const { verifyToken } = require('../utils/cryptoJWT');

const handleTokenAuth = (req, res, next) => {
  const token = req.header.authorization;

  const bool = verifyToken(token);
  console.log(bool);

  if (!bool) {
    res.status(404).json({ message: 'deu erro' });
  }

  next();
};

module.exports = handleTokenAuth;