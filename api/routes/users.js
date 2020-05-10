var express = require('express');
var router = express.Router();
const usersController = require("../controllers/users");
const checkAuth=require('../middlewares/checkAuth');
// const User = require('../api/models/user');



/* GET users listing. */

router.post('/signup',usersController.createSingleResource);
router.post('/login',usersController.findByLoginResource);
router.get('/', checkAuth,usersController.getAllResources);
router.get('/:userId',usersController.getSingleResource);
router.delete('/:userId',checkAuth, usersController.deleteSingleResource);
router.put('/:userId', checkAuth,usersController.updateSingleResource);

module.exports = router;
