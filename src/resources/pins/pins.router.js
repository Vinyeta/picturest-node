const { Router } = require('express');
const pinsController = require('./pins.controller');
const router = Router();
const { body } = require('express-validator');


router.route('/')
    .get(pinsController.getAll)
    .post(  
            body("urlImage").isURL(),
            body("source").isURL(),
            pinsController.create
            );

router
    .route('/:id')
    .get(pinsController.getOne)
    .patch(pinsController.update)
    .delete(pinsController.remove)
    
router  
    .route('/board/:id')
    .get(pinsController.getByBoardId)


module.exports = router;