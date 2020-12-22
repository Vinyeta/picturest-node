const boardModel = require('./boards.model');

const getNumPins = ( id ) => {
  const pins = pinsboardModel.all();
  let numPins = 0;
  pins.forEach(element => {
    if( element.board === id) numPins++;
  });
  return numPins;
}


const getAll = async (req, res) => {
  const boards = await boardModel.all();
  return res.status(200).json(boards);
};

const getOne = async (req, res) => {
  const board = await boardModel.get(req.params.id);
  return res.status(200).json(board);
};

const create = (req,res) => {
    const board = boardModel.create(req.body);
    return res.status(201).json(board);   
};

const update = (req, res) => {
    const board = boardModel.update(req.params.id, req.body);
    return res.status(200).json(board[req.params.id]);
};

const remove = (req,res) => {
    const board = boardModel.delete(req.params.id);
    return res.status(200).json(board);
};


module.exports = {
  getAll,
  getOne,
  create,
  update,
  remove,
};