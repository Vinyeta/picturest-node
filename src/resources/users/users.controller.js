const userModel = require('./users.model');


const getAll = async (req, res) => {
  const users = await userModel.all();
  return res.status(200).json(users);
};

const getOne = async (req, res) => {
  const user = await userModel.get(req.params.id);
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
    const user = userModel.remove(req.params.id);
    return res.status(200).json(user);
};

module.exports = {
  getAll,
  getOne,
  create,
  update,
  remove
};