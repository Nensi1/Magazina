const userModel = require('../../models/index');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const updateUser = async (req, res) => {
    try{
        bcrypt.hash(req.body.password, saltRounds, function (err, hash) { 
          const userId = req.params.userId;

        userModel.User.update(
        {
        "nipt": req.body.nipt,
        "username": req.body.username,
        "phone": req.body.phone,
        "email": req.body.email,
        "password": hash
      }, 
      {
        where: { id: userId }
      }).then( (result) => res.json(result) )
      .catch((e)=>{
        res.status(404).send('User with the specified ID does not exists' + e);
       });
      });
      
    }

    catch (e) {
      return res.status(500).send(e.message);
    }
};

exports.updateUser = updateUser;