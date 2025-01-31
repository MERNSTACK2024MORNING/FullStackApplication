const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController')
const {authenticateToken} = require('../middleware/authMiddlware')
router.get('/',authenticateToken,studentController.getAllStudents);
router.post('/',authenticateToken,studentController.createStudent);
router.put('/:id',authenticateToken,studentController.updateStudent);
router.delete('/:id',authenticateToken,studentController.deleteStudent);


module.exports = router;