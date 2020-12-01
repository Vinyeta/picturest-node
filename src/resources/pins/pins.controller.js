const persimon = require('../../utils/persimon');
const db = persimon('/assets/pins.json'); // Relative to the project root


const getAll = (req, res) => {
  const pins = db.all();
  return res.status(200).json(pins);
};

const getOne = (req, res) => {
  const pin = db.get(req.params.id);
  return res.status(200).json(pin);
};

const create = (req,res) => {
    const pin = db.create(req.body);
    console.log(res);
    return res.status(201).json(pin);   
};

const update = (req, res) => {
    const pin = db.update(req.params.id, req.body);
    return res.status(200).json(pin);
};

const remove = (req,res) => {
    const pin = db.delete(req.params.id);
    return res.status(200).json(pin);
};

module.exports = {
  getAll,
  getOne,
  create,
  update,
  remove
};