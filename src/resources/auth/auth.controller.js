const persimon = require('../../utils/persimon');
const db = persimon('/assets/users.json'); // Relative to the project root
const jwt = require('jsonwebtoken');


const login =  (req,res) => {
      
    const { username, password } = req.body;

    const users = db.all();

    const user = users.find(u => { return u.userName === username && u.password === password })
    
    if(user) {

      const token = jwt.sign({ 'userName': user.userName, 'role': user }, process.env.TOKEN_SECRET);
      res.send(token);
    } else {
      res.send('Incorrect user or password');
    }            
  }

  module.exports = {
      login
  }