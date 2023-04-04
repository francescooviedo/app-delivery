const { 
  comparePassword,
  generateToken,
  verifyToken,
 } = require('../utils/cryptoJWT');

const { User } = require('../../database/models');

const createUser = async (userData) => {
  const user = await User.create(userData);
  const token = await generateToken(user.id);
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
  const validate = comparePassword(password, user.dataValues.password);
  if (!validate) {
    throw new Error('Invalid password');
  }
  const token = await generateToken(user.id);
  console.log(token);
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
const userValidation = async (token) => {
  // const { id } = await User.findOne({ where: { email } });
  const userId = await verifyToken(token);
  console.log(userId);
  const result = !!userId;
  return result;
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
