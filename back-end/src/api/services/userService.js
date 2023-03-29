const { User } = require('../../database/models');
// const createUser = (displayName, email, password) => User.create({ displayName, email, password });

const getUsers = () => User.findAll();

// const getByUsername = (username) => User.findOne({ where: { username } });

// const getUserByEmail = (email) => User.findOne({ where: { email } });

// const getByUserId = (userId) => User.findByPk(userId);

module.exports = {
  // createUser,
  getUsers,
  // getByUsername,
  // getByUserId,
  // getUserByEmail,
};
