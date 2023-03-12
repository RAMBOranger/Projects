const { Services } = require("../models/");

const getAllServices = async (req, res) => {
  try {
    const services = await Services.findAll();
    res.json(services);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const getServiceById = async (req, res) => {
  try {
    const services = await Services.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(services[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const createService = async (req, res) => {
  try {
    await Services.create(req.body);
    res.json({
      message: "Service Created",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const updateService = async (req, res) => {
  try {
    await Vendors.update(req.body, {
      where: {
        service_id: req.params.id,
      },
    });
    res.json({
      message: "Service Updated",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const deleteService = async (req, res) => {
  try {
    await Services.destroy({
      where: {
        service_id: req.params.id,
      },
    });
    res.json({
      message: "Service Deleted",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = {
  getAllServices,
  getServiceById,
  createService,
  updateService,
  deleteService,
};
