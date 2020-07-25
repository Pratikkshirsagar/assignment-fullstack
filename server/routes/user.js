const express = require('express');
const router = express.Router();
const {
  getUser,
  getUsers,
  createUser,
  userLogin,
} = require('../controllers/userController');

router.post('/login', userLogin);
router.route('/:id').get(getUser);

router.route('/').get(getUsers).post(createUser);

module.exports = router;
