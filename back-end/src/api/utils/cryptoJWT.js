const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const secretKey = 'jwt_secret';

function hashPassword(password) {
    const hashedPassword = crypto.createHash('md5').update(password).digest('hex');
    return hashedPassword;
  }

function generateToken(userId) {
  const token = jwt.sign({ userId }, secretKey);
  return token;
}

function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded.userId;
  } catch (err) {
    return null;
  }
}
function comparePassword(password, hashedPassword) {
    const passwordHash = hashPassword(password);
    return passwordHash === hashedPassword;
  }

module.exports = {
  hashPassword,
  verifyToken,
  generateToken,
  comparePassword,
};
