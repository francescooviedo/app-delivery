const UserService = require('../services/userService');

module.exports = async (_req, res) => {
  try {
    console.log(UserService);
    const users = await UserService.getUsers();
    res.status(200).json(users);
  } catch (err) {
  return res.status(500).json({ message: 'Erro interno', error: err.message });
  }
};