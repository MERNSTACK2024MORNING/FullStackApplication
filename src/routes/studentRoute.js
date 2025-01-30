const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController')
// const {authenticateToken} = require('../middleware/authMiddlware')
router.get('/' ,studentController.getAllStudents);
router.post('/',studentController.createStudent);
// router.get('/all',authController.getUsers);


module.exports = router;