const { Invoices } = require("../models");

const getAllInvoices = async (req, res) => {
  try {
    const invoices = await Invoices.findAll();
    res.json(invoices);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const getInvoiceById = async (req, res) => {
  const id =  req.params.id;
  try {
    const invoices = await Invoices.findAll({
      where: {
        invoice_id: id,
      },
    });
    res.json(invoices[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};
const getInvoiceByWeddingId = async (req, res) => {
  const id =  req.params.id;
  try {
    const invoices = await Invoices.findOne({
      where: {
        WeddingWeddingId: id,
      },
    });
    res.json(invoices);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const createInvoice = async (req, res) => {
  try {
    await Invoices.create(req.body);
    res.json({
      message: "invoices Created",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const updateInvoice = async (req, res) => {
  try {
    await Invoices.update(req.body, {
      where: {
        invoice_id: req.params.id,
      },
    });
    res.json({
      message: "invoices Updated",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const deleteInvoice = async (req, res) => {
  try {
    await Invoices.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "invoices Deleted",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = {
    getAllInvoices,
    getInvoiceById,
    createInvoice,
    updateInvoice,
    deleteInvoice,
    getInvoiceByWeddingId
};