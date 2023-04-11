const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const jwtKey = require('fs')
  .readFileSync('jwt.evaluation.key', { encoding: 'utf-8' });

  const jwtConfig = { expiresIn: '1d', algorithm: 'HS256' };

function hashPassword(password) {
    const hashedPassword = crypto.createHash('md5').update(password).digest('hex');
    return hashedPassword;
  }

function generateToken(userId) {
  const token = jwt.sign({ userId }, jwtKey, jwtConfig);
  console.log(token);
  return token;
}

function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, jwtKey);
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
