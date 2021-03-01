const jwt = require('jsonwebtoken');
const  UserModel = require('../users/users.model');


const login =  async (req,res) => {
      
    const { username, password } = req.body;

    const users = await UserModel.all();

    const user = users.find(u => { return u.userName === username && u.password === password })
    
    if(user) {

      const token = jwt.sign({ 'userName': user.userName, 'role': user }, process.env.TOKEN_SECRET);
      res.json({
        token: token,
        user: user
      });
    } else {
      res.send('Incorrect user or password');
    }            
  }

  module.exports = {
      login
  }