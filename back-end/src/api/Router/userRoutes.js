const express = require('express');
const {
    createUserHandler,
    getUserByIdHandler,
    validateLoginHandler,
    getExistingUserHandler,
    // updateUserHandler,
    // deleteUserHandler
 } = require('../controllers/userController');

const router = express.Router();
const users = '/users/:id';

router.post('/users', getExistingUserHandler);
router.post('/register', createUserHandler);
router.get(`${users}`, getUserByIdHandler);

router.post('/login', validateLoginHandler);
// router.put(`${users}`, updateUserHandler);
// app
// router.delete(`${users}`, deleteUserHandler);

module.exports = router;
