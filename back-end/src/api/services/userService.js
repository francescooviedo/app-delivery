const { 
  comparePassword,
  generateToken,
 } = require('../utils/cryptoJWT');

const { User } = require('../../database/models');

const createUser = async (userData) => {
  const user = await User.create(userData);
  return user;
};

const getUserById = async (id) => {
  const user = await User.findOne({ where: { id } });
  return user;
};

const getByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

const getByEmailandPassword = async (email, password) => {
  console.log(email, password);
  const user = await User.findOne({ where: { email } });
  console.log(user.dataValues);
  // const { passwordMD5 } = user.dataValues.password;
  const validate = comparePassword(password, user.dataValues.password);
  console.log('validate', validate);
  if (!validate) {
    throw new Error('Invalid password');
  }
  const token = generateToken(user.id);
  return token;
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

module.exports = {
  getByEmailandPassword,
  createUser,
  getByEmail,
  getUserById,
  // updateUser,
  // deleteUser,
 
};
