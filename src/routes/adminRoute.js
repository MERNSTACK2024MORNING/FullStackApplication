const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const {authenticateToken,isAdmin} = require('../middleware/authMiddlware');

router.post('/',authenticateToken,isAdmin,adminController.createAdmin); 
router.post('/login',authenticateToken,isAdmin,adminController.adminLogin); 
router.get('/',authenticateToken,isAdmin,adminController.getAllAdmins); 
router.put('/:id',authenticateToken,isAdmin,adminController.updateAdmin); 
// router.get('/',authenticateToken,isAdmin,adminController.getAllAdmins); 
 

module.exports = router;