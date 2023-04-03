const { 
  comparePassword,
  generateToken,
  verifyToken,
 } = require('../utils/cryptoJWT');

const { User } = require('../../database/models');

const createUser = async (userData) => {
  const user = await User.create(userData);
  const token = generateToken(user.id);
  return { user, token };
};

const getUserById = async (id) => {
  const user = await User.findOne({ where: { id } });
  return user;
};

const getByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

const getByEmailandPassword = async (reqEmail, password) => {
  console.log(reqEmail, password);
  const user = await User.findOne({ where: { email: reqEmail } });
  const { name, email, role } = user.dataValues;
  console.log(name, email, role);

  // const { passwordMD5 } = user.dataValues.password;
  const validate = comparePassword(password, user.dataValues.password);
  console.log('validate', validate);
  if (!validate) {
    throw new Error('Invalid password');
  }
  const token = generateToken(user.id);
  return { token, name, email, role };
};
const getUserByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};
// const updateUser = async (id, userData) => {
//   const [, [user]] = await User.update(userData, {
//     returning: true,
//     where: { id },
//   });
//   return user;
// };

// const deleteUser = async (id) => {
//   const user = await getUserById(id);
//   await user.destroy();
// };

// aqui
const userValidation = async (email, token) => {
  const { id } = await User.findOne({ where: { email } });
  const userId = verifyToken(token);
  return userId === id;
};
module.exports = {
  getByEmailandPassword,
  createUser,
  getByEmail,
  getUserById,
  getUserByEmail,
  userValidation,
    // updateUser,
  // deleteUser,
 
};
