const express = require("express");
const router = express.Router();
const { validateToken } = require("../middlewares/AuthMiddleware");

const invoiceController = require("../controllers/Invoices");
//const userController = require('../controllers/userController');

// const auth = require('../middleware/auth');

//router.post('/addcourse', auth, userController.addNewFavoriteCourse);
router.get("/getAllInvoices", invoiceController.getAllInvoices);
router.get("/getInvoiceById/:id", invoiceController.getInvoiceById);
router.get("/getInvoiceByWeddingId/:id", invoiceController.getInvoiceByWeddingId);
router.post("/createInvoice", invoiceController.createInvoice);
router.patch("/updateInvoice", invoiceController.updateInvoice);
router.delete("/deleteInvoice/:id", invoiceController.deleteInvoice);

module.exports = router;
