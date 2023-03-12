
const express = require("express");
const router = express.Router();
const { validateToken } = require("../middlewares/AuthMiddleware");

 const vendorController = require('../controllers/Vendors')
 //const userController = require('../controllers/userController');

// const auth = require('../middleware/auth');

 //router.post('/addcourse', auth, userController.addNewFavoriteCourse);
router.get('/getAllVendors', vendorController.getAllVendors);
router.get('/getVendorById/:id', validateToken, vendorController.getVendorById);
router.post('/createVendor', validateToken, vendorController.createVendor);
router.patch('/updateVendor', validateToken, vendorController.updateVendor);
router.delete('/deleterVenor/:id',validateToken, vendorController.deleteVendor);

module.exports = router;
