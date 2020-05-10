const userModel = require('../../models/index');

const getAllUsers = async (req, res) => {
    try{
         userModel.User.findAll()
        .then(function(result) {
          res.send(result);
          });
        }
    catch(err){
        res.send('error when getting all users: ' + err)
    }
};

exports.getAllUsers = getAllUsers;
