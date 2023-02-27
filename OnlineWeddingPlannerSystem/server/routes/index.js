import express from "express";
 
import { 
    getAllVendors,
    createVendor,
    getVendorById,
    updateVendor,
    deleteVendor
} from "../controllers/Vendors.js";
 
const router = express.Router();
 
router.get('/', getAllVendors);
router.get('/:id', getVendorById);
router.post('/', createVendor);
router.patch('/:id', updateVendor);
router.delete('/:id', deleteVendor);
 
export default router;
 