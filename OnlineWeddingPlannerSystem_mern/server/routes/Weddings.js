const express = require("express");
const router = express.Router();
const { validateToken } = require("../middlewares/AuthMiddleware");

const weddingController = require("../controllers/Weddings");
//const userController = require('../controllers/userController');

// const auth = require('../middleware/auth');

//router.post('/addcourse', auth, userController.addNewFavoriteCourse);
router.get("/getAllWeddings", weddingController.getAllWeddings);
router.get("/getWeddingById/:id", weddingController.getWeddingById);
router.post("/createWedding", weddingController.createWedding);
router.patch("/statusApprove/:id", weddingController.statusApprove);
router.delete("/deleteWedding/:id", weddingController.deleteWedding);
router.get("/getWeddingByUserId/:id", weddingController.getWeddingByUserId);

module.exports = router;
