

const mongoose = require('mongoose');

// Define model schema
const userModelSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  avatar: String,
  password: String,
  userName: String,
  following: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserModel'
  }]
});

// Compile model from schema
const UserModel = mongoose.model('UserModel', userModelSchema);

const create = (user) => {
  UserModel.create(user, function (err, instance) {
    if (err) return handleError(err);
    if (instance) {
      console.log(instance.name);
    }
  });
};

const get = async (id) => {
  return await UserModel.findOne({'_id': id}).populate('author');
  }


  const all = async () => {
    return await UserModel.find();
  }

  const update = (id, updatedUser) => {
    UserModel.updateOne({ '_id': id }, updatedUser, function (err, user) {
      if (err) console.log(err);
      else console.log(user);
    });
  }

  const remove = (id) => {
    let query = { '_id': id };
    User.deleteOne(
      query,
      function (err, docs) {
        if (err) {
          console.log(err)
        }
        else {
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
