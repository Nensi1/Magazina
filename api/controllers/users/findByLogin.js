const userModel = require('../../models/index');
const bcrypt = require('bcrypt')
const jwt=require('jsonwebtoken');

  const findByLogin = async (req, res) => {
    try{      
      const login = await userModel.User.findOne({
        where: {nipt: req.body.nipt}
      }).then(function(user){
        bcrypt.compare(req.body.password, user.password, (e,result) => {
          if(e){
            return result.status(404).json({
              message:'Credentials not found, user does not exist/ Auth failed'
            });                
          }
          if(result){
            const token = jwt.sign({
              nipt:user.nipt,
              userId:user.id
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
            }
       )
    }).catch((e)=>{
      res.status(404).send('Credentials not found, user does not exist/ Auth failed' + e);
    });
  }
    catch(err){
        res.send('error when loging in: ' + err)
    }
};
exports.findByLogin = findByLogin;
//when wrong password: no error shows right away, the req is "sending"

