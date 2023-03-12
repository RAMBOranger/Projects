//import Vendor from "../models/Vendors.js";
const { Vendors } = require("../models/");

 const getAllVendors = async (req, res) => {
    try {
        const vendors = await Vendors.findAll();
        res.json(vendors);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
const getVendorById = async (req, res) => {
    try {
        const vendor = await Vendor.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(vendor[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
const createVendor = async (req, res) => {
    try {
        await Vendor.create(req.body);
        res.json({
            "message": "Product Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
const updateVendor = async (req, res) => {
    try {
        await Vendor.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Vendor Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
const deleteVendor = async (req, res) => {
    try {
        await Vendor.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Vendor Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}

module.exports = {
    getAllVendors,
    getVendorById,
    createVendor,
    updateVendor,
    deleteVendor,
 };