const persimon = require('../../utils/persimon');
const db = persimon('/assets/boards.json');
const pinsDb = persimon('/assets/pins.json'); // Relative to the project root

const getNumPins = ( id ) => {
  const pins = pinsDb.all();
  let numPins = 0;
  pins.forEach(element => {
    if( element.board === id) numPins++;
  });
  return numPins;
}


const getAll = (req, res) => {
  const boards = db.all();
  boards.forEach( element => {
    element.numPins = getNumPins(element.id);
  })
  return res.status(200).json(boards);
};

const getOne = (req, res) => {
  const board = db.get(req.params.id);
  return res.status(200).json(board);
};

const create = (req,res) => {
    const board = db.create(req.body);
    return res.status(201).json(board);   
};

const update = (req, res) => {
    const board = db.update(req.params.id, req.body);
    return res.status(200).json(board[req.params.id]);
};

const remove = (req,res) => {
    const board = db.delete(req.params.id);
    return res.status(200).json(board);
};

module.exports = {
  getAll,
  getOne,
  create,
  update,
  remove
};