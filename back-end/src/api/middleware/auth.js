const jwt = require('jsonwebtoken');
const jwtKey = require('fs')
  .readFileSync('jwt.evaluation.key', { encoding: 'utf-8' });

const auth = async (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
      return res.status(401).json({ error: 'Token não encontrado' });
    }
  
    try {
      const decoded = jwt.verify(token, jwtKey);
      if (!decoded) {
        return res.status(401).json({ message: 'Token Invalido.' });
      }
      next();
    } catch (err) {
      return res.status(401).json({ message: err.message });
    }
  };

module.exports = { auth };
