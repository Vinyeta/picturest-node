const pinModel = require('./pins.model');


const getAll = async (req, res) => {
  const pins = await pinModel.all();
  return res.status(200).json(pins);
};

const getOne = async (req, res) => {
  const pin = await pinModel.get(req.params.id);
  return res.status(200).json(pin);
};

const create = (req,res) => {
    const pin = pinModel.create(req.body);
    console.log(res);
    return res.status(201).json(pin);   
};

const update = (req, res) => {
    const pin = pinModel.update(req.params.id, req.body);
    return res.status(200).json(pin);
};

const remove = (req,res) => {
    const pin = pinModel.delete(req.params.id);
    return res.status(200).json(pin);
};

const getByBoardId = async (req,res) => {
  const pins = await pinModel.getByBoardId(req.params.id);
  return res.status(200).json(pins);
}

module.exports = {
  getAll,
  getOne,
  create,
  update,
  remove,
  getByBoardId
};