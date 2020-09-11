const userModel = require('../../models/index');

const getUser = async (req, res) => {
    try{
        // console.log(req.params.userId);
        const user = await userModel.User.findOne({
          where: { "id": req.params.userId },
           }).then(function(result) {
          return res.json({
              "success": 1,
              "message": "User displayed successfully",
              "User": result,
          });
        }).catch((e)=>{
          res.status(404).send('User with the specified ID does not exists' + e);
         });

        }
    catch(err){
        res.send('error when getting all users: ' + err)
    }
};

exports.getUser = getUser;

   