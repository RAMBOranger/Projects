const express = require("express");
const router = express.Router();
const { validateToken } = require("../middlewares/AuthMiddleware");

const serviceController = require("../controllers/Services");
//const userController = require('../controllers/userController');

// const auth = require('../middleware/auth');

//router.post('/addcourse', auth, userController.addNewFavoriteCourse);
router.get("/getAllServices", serviceController.getAllServices);
router.get("/getServiceById/:id", serviceController.getServiceById);
router.post("/createService",  serviceController.createService);
router.patch("/updateService/:id",  serviceController.updateService);
router.delete("/deleteService/:id",  serviceController.deleteService);

module.exports = router;
