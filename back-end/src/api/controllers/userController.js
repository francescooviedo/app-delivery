const { 
  createUser,
  getUserById,
  getByEmail,
  getByEmailandPassword,
  getUserByEmail,
  userValidation,
  // updateUser,
  // deleteUser,
  
    } = require('../services/userService');
const { hashPassword } = require('../utils/cryptoJWT');

const createUserHandler = async (req, res) => {
  const { name, email, password, role } = req.body;
  const userEmail = await getByEmail(email);
  if (userEmail) {
    return res.status(409).json({}); 
  }
  const passwordMD5 = hashPassword(password);
  const user = await createUser({ name, email, password: passwordMD5, role });
   return res.status(201).json(user);
};

const getUserByIdHandler = async (req, res) => {
  const user = await getUserById(req.params.id);
  res.json(user);
};

const validateLoginHandler = async (req, res) => {
  try {
    const { email, password } = req.body;
    const response = await getByEmailandPassword(email, password);
    console.log('aqui', response);
    return res.status(200).json(response);
  } catch (error) {
  return res.status(404).json({ message: error.message });
        }
};

const getExistingUserHandler = async (req, res) => {
  const user = await getUserByEmail(req.body.email);
  if (user) {
    return res.status(409).json();
  }
  res.json(user);
};

const validateUsers = async (req, res) => {
  try {
    const { token } = req.body;
    const response = await userValidation(token);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json(error.message);
  }
};

module.exports = {
  createUserHandler,
  getUserByIdHandler,
  validateLoginHandler,
  getExistingUserHandler,
  validateUsers,
};
