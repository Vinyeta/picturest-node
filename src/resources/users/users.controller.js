const userModel = require('./users.model');


const getAll = (req, res) => {
  const users = userModel.all();
  return res.status(200).json(users);
};

const getOne = (req, res) => {
  const user = userModel.get(req.params.id);
  return res.status(200).json(user);
};

const create = (req,res) => {
    const usersUpdated = userModel.create(req.body);
    return res.status(201).json(usersUpdated);  
};

const update = (req, res) => {
    const user = userModel.update(req.params.id, req.body);
    return res.status(200).json(user);
};

const remove = (req,res) => {
    const user = userModel.delete(req.params.id);
    return res.status(200).json(user);
};

module.exports = {
  getAll,
  getOne,
  create,
  update,
  remove
};