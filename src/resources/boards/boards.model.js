const mongoose = require('mongoose');

// Define model schema
const boardModelSchema = mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserModel'
  },
  title: String,
  collaborators: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'UserModel'
    }
  ],
});

// Compile model from schema
const boardModel = mongoose.model('BoardModel', boardModelSchema );

const create = (board) => {
    boardModel.create(board, function (err, instance) {
      if (err) {
        console.log(err);
      } else {
        console.log('Created Docs : ', instance);
      }
      });
};

const get = async (id) => {
  return await boardModel.findOne({'_id': id});
}


  const all = async() => {
    return await boardModel.find();
  }

const update = (_id, updatedboard) => {
    boardModel.updateOne({'_id': _id},updatedboard, function (err, board){
        if (err) console.log(err);
        else console.log(board);
      });
    }

    const remove = (_id) => {
      let query = { '_id': _id };
      board.deleteOne(
        query,
        function (err, docs) { 
          if (err){ 
            console.log(err) 
          }
          else{ 
            console.log("Deleted Doc : ", docs);
          }
      });
    }


module.exports = {
    create,
    get,
    all,
    update,
    remove
  };
