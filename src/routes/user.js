const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

router.get('/all', userController.allUsers);
router.post('/register', userController.createUser);
router.put('/update/:id', userController.updateUser);
router.delete('/delete/:id', userController.deleteUser);
router.get('/:id', userController.oneUser);

module.exports = router;