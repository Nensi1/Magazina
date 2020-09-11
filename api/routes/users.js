var express = require('express');
var router = express.Router();
const usersController = require("../controllers/users");
const checkAuth=require('../middlewares/checkAuth');
// const User = require('../api/models/user');



/* GET users listing. */

router.post('/', usersController.createSingleResource);
router.get('/', usersController.getAllResources);
router.get('/:userId',checkAuth, usersController.getSingleResource);
router.delete('/:userId', checkAuth, usersController.deleteSingleResource);
router.put('/:userId', checkAuth, usersController.updateSingleResource);
router.post('/login', usersController.findByLoginResource);

module.exports = router;
