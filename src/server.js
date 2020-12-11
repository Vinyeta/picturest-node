const express = require('express');
const { json, urlencoded } = require('body-parser');
const morgan = require('morgan');
const config = require('./config.js');
const cors = require('cors');
const pinsRouter = require('./resources/pins/pins.router');
const boardsRouter = require('./resources/boards/boards.router');
const usersRouter = require('./resources/users/users.router');
const jwt = require('express-jwt');
const jsonwebtoken = require('jsonwebtoken');


var path = require('path');
global.appRoot = path.resolve(__dirname);

const secret = 'secretToken';

const app = express();

const persimon = require('./utils/persimon');
const db = persimon('/assets/users.json');

const users = db.all();


app.disable('x-powered-by');

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/api/pins', pinsRouter);
app.use('/api/boards', boardsRouter);
app.use('/api/users', usersRouter);

const start = async () => {
  try {

    app.post('/login', (req,res) => {
      
      const { username, password } = req.body;

      const user = users.find(u => { return u.userName === username && u.password === password })
      
      if(user) {

        const token = jsonwebtoken.sign({ 'userName': user.userName, 'role': user }, secret);
        res.send(token);
      } else {
        res.send('Incorrect user or password');
      }            
    })

   app.get('/protected', jwt({ secret, algorithms:['HS256'] }), (req,res) => {
     res.send('protected');
   })

    app.listen(config.port, () => {
      console.log(`REST API on http://localhost:${config.port}`);
    });
  } catch (e) {
    console.error(e);
  }
};

module.exports = {
  start,
  app,
};
