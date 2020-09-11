const userModel = require('../../models/index');
const validate = require('express-validator').validationResult;
const bcrypt = require('bcrypt');
const saltRounds = 10;


const createUser = async (req, res) => {
    try{
        const errors = validate(req);

        if (!errors.isEmpty()) {
            return res.status(codes.VALIDATION_ERR).json({errors: errors.array()});
        }
      bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
    if(err){
        return result.status(404).json({
          message:'No hashing possible'+err
        });                
      }

    userModel.User.create({ 
    nipt: req.body.nipt,
    username: req.body.username,
    phone: req.body.phone,
    email: req.body.email,
    password: hash
  }).then(function(result) {
    return res.json({
        "success": 1,
        "message": "User added successfully",
        "User": result,
        });
    }).catch((error)=>{
        res.status(404).send(`User can not be created ${error}`);
    })
    });

    }


    catch (e) {
        res.status(201).json({
            message: 'Error when creating user'+e,
        })
    }
};

exports.createUser = createUser;

     




