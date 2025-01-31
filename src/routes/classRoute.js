const express = require('express');
const router = express.Router();
const classController = require('../controllers/classController')
const {authenticateToken} = require('../middleware/authMiddlware')
router.get('/',authenticateToken,classController.getAllClasses);
router.post('/',authenticateToken,classController.createClass);
router.put('/:id',authenticateToken,classController.updateClass);
router.delete('/:id',authenticateToken,classController.deleteClass);


module.exports = router;