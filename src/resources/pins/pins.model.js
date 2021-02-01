 const mongoose = require('mongoose');

// Define model schema
const pinModelSchema = mongoose.Schema({
  board: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'BoardsModel'
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserModel'
  },
  source: String,
  urlImage: String,
  name: String,
  description: String,
});

// Compile model from schema
const PinModel = mongoose.model('PinModel', pinModelSchema );

const create = (pin) => {
    PinModel.create(pin, function (err, instance) {
        if (err) return console.log(err);
        if (instance) {
            console.log(instance.name);
        }
      });
};

const get = async (id) => {
  return await PinModel.findOne({'_id': id}).populate('author');
}


  const all = async() => {
    return await PinModel.find();
  }

const update = (_id, updatedpin) => {
    PinModel.updateOne({'_id': _id},updatedpin, function (err, pin){
        if (err) console.log(err);
        else console.log(pin);
      });
    }

    const remove = (_id) => {
      let query = { '_id': _id };
      pin.deleteOne(
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

    const getPinsByBoardId = async ( id )=> {
      return await PinModel.find({'board': id});
    }


module.exports = {
    create,
    get,
    all,
    update,
    remove,
    getPinsByBoardId
  };
