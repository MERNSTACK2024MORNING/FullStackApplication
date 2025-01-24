const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const {authenticateToken,isAdmin} = require('../middleware/authMiddlware');

router.post('/register',adminController.createAdmin); 
router.post('/login',adminController.adminLogin); 

module.exports = router;