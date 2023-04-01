const { 
  createUser,
  getUserById,
  getByEmail,
  getByEmailandPassword,
  // updateUser,
  // deleteUser,
  
    } = require('../services/userService');
const { hashPassword } = require('../utils/cryptoJWT');

const createUserHandler = async (req, res) => {
  const { name, email, password, role } = req.body;
  // se usuario ja exite
  const userEmail = await getByEmail(email);
  if (userEmail) {
    return res.status(400).json({ error: 'User already exists' });
  }
  const passwordMD5 = hashPassword(password);
  // encriptacao de senha
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

    console.log(email, password);

    const token = await getByEmailandPassword(email, password);
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(400).json({ message: error.message });
        }
};
// const updateUserHandler = async (req, res) => {
//   const user = await updateUser(req.params.id, req.body);
//   res.json(user);
// };

// const deleteUserHandler = async (req, res) => {
//   await deleteUser(req.params.id);
//   res.sendStatus(204);
// };

module.exports = {
  createUserHandler,
  getUserByIdHandler,
  validateLoginHandler,
  // updateUserHandler,
  // deleteUserHandler,
};
