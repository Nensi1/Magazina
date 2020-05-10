const userModel = require('../../models/index');
const validate = require('express-validator').validationResult;


const createUser = async (req, res) => {
    try{
        const errors = await validate(req);

        if (!errors.isEmpty()) {
            return res.status(codes.VALIDATION_ERR).json({errors: errors.array()});
        }

        userModel.User.create({ 
            nipt: req.body.nipt,
            username: req.body.username,
            phone: req.body.phone,
            email: req.body.email,
            password: req.body.password
          })
        .then(function(result) {
            return res.json({
                "success": 1,
                "message": "User added successfully",
                "User": result,
            });
          });

 
    }
    catch (e) {
        res.status(201).json({
            message: 'Error when creating user',
        })
    }
};

exports.createUser = createUser;





        // const User = await new userModel.User(req.body);
        // return res.json({
        //     message: "User created",
        //     User: User
        // }
        // );        res.send('error when creating user: ' + err)
