const express = require('express');
const {
    createUserHandler,
    getUserByIdHandler,
    validateLoginHandler,
    // updateUserHandler,
    // deleteUserHandler
 } = require('../controllers/userController');

const router = express.Router();
const users = '/users/:id';

router.post('/users', createUserHandler);

router.get(`${users}`, getUserByIdHandler);

router.get('/login', validateLoginHandler);
// router.put(`${users}`, updateUserHandler);

// router.delete(`${users}`, deleteUserHandler);

module.exports = router;
