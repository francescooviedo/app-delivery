const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const fs = require('fs/promises');

const secretKey = async () => {
  const data = await fs.readFile(
    './jwt.evaluation.key', 
    'utf-8',
  );
  return data;
};
function hashPassword(password) {
    const hashedPassword = crypto.createHash('md5').update(password).digest('hex');
    return hashedPassword;
  }

async function generateToken(userId) {
  const options = {
        expiresIn: '3d',
        algorithm: 'HS256',
      };
  const key = await secretKey();
  const token = jwt.sign({ userId }, key, options);
  console.log(token);
  return token;
}

async function verifyToken(token) {
  try {
    const key = await secretKey();
    const decoded = jwt.verify(token, key);
    console.log('awqui?:', decoded);
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
