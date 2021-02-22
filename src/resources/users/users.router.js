const { Router } = require('express');
const boardsController = require('../boards/boards.controller');
const pinsController = require('../pins/pins.controller');
const usersController = require('./users.controller');
const router = Router();
const { body } = require('express-validator');


router.route('/')
    .get(usersController.getAll)
    .post(  body('password').isLength({min: 5 }),
            body('email').isEmail(),
            usersController.create,
        );

router
    .route('/:id')
    .get(usersController.getOne)
    .patch(usersController.update)
    .delete(usersController.remove)


module.exports = router;