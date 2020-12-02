const persimon = require('../../utils/persimon');
const db = persimon('/assets/users.json'); // Relative to the project root


const getAll = (req, res) => {
  const users = db.all();
  return res.status(200).json(users);
};

const getOne = (req, res) => {
  const user = db.get(req.params.id);
  return res.status(200).json(user);
};

const create = (req,res) => {
    const user = db.create(req.body);
    return res.status(201).json(user);   
};

const update = (req, res) => {
    const user = db.update(req.params.id, req.body);
    return res.status(200).json(user);
};

const remove = (req,res) => {
    const user = db.delete(req.params.id);
    return res.status(200).json(user);
};

module.exports = {
  getAll,
  getOne,
  create,
  update,
  remove
};