const { Weddings } = require("../models");
const { Invoices } = require("../models");
const { Services } = require("../models");

const getAllWeddings = async (req, res) => {
  try {
    const weddings = await Weddings.findAll();
    res.json(weddings);
  } catch (error) {
    res.json({ message: error.message });
  }
};
const getWeddingByUserId = async (req, res) => {
  const id =  req.params.id;
  try {
    const wedding = await Weddings.findOne({
      where: {
        UserId: id,
      },
    });
    res.json(wedding);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const getWeddingById = async (req, res) => {
  const id =  req.params.id;
  try {
    const wedding = await Weddings.findAll({
      where: {
        wedding_id: id,
      },
    });
    res.json(wedding[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const createWedding = async (req, res) => {
  try {
    await Weddings.create(req.body);
    res.json({
      message: "wedding planned successfully!! wait for approval!!",
            });
  } catch (error) {
    res.json({ message: error.message });
  }
};




const statusApprove = async (req, res) => {
  const id =req.params.id;
  try {
    const wedding = await Weddings.findOne({ where: { wedding_id: id } });
    if(!wedding){
      return res.status(404).json({ message: "User not found" });
    }else{
    wedding.status=true;
    wedding.save().then(async ()=>{ 
      // const wedding = Weddings.findOne({ where: { wedding_id: id } });  
      const hall = wedding.hall;
      const catering = wedding.catering;
      const photography = wedding.photography;
      const halldet =  await Services.findOne({ where: { serviceName: hall } });
      const cateringdet =  await Services.findOne({ where: { serviceName: catering } });
      const photodet =  await Services.findOne({ where: { serviceName: photography } });
      const total = halldet.servicePrice + cateringdet.servicePrice + photodet.servicePrice ;
      const invoice = { 
        hallCharges:halldet.servicePrice,
        cateringCharges: cateringdet.servicePrice,
        photographyCharges: photodet.servicePrice,
        total:total,
        WeddingWeddingId:id };
        Invoices.create(invoice);
       
        }              
    ).then(
    res.json({
      message: "invoice generated",
    }));
  } }catch (error) {
    res.json({ message: error.message });
  }
};

const deleteWedding = async (req, res) => {
  try {
    await Weddings.destroy({
      where: {
        wedding_id: req.params.id,
      },
    });
    res.json({
      message: "wedding Deleted",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = {
    getAllWeddings,
    getWeddingById,
    createWedding,
    statusApprove,
    deleteWedding,
    getWeddingByUserId,
};