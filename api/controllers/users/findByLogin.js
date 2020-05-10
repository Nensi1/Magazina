const userModel = require('../../models/index');
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');

  const findByLogin = async (req, res) => {
    try{
     userModel.User.find({
        where: { nipt: req.body.nipt },
      }).exec()
        .then(user =>{
          if (user.length < 1){
            try{
              user=user.User.find({
                where: { email: req.body.email },
              });
              return user;
            }
            catch(error){
            return res.status(404).json({
              message:'Credentials not found, user does not exist/ Auth failed'+ err,
            });
          }
          }
            bcrypt.compare(req.body.password, user[0].password, (err,result) => {
              if(err){
                return result.status(404).json({
                  message:'Credentials not found, user does not exist/ Auth failed'
                });                
              }
              if(result){
                const token = jwt.sign({
                  nipt:user[0].nipt,
                  userId:user[0].id
                },
                process.env.JWT_KEY, 
                {
                  expiresIn: "1h"
                }
                );
                return res.status(200).json({
                  message:'Credentials found, Auth successful',
                  token:token
                })
              }
            });
          });
        }
    catch(err){
        res.send('error when getting all users: ' + err)
    }
};
exports.findByLogin = findByLogin;