const userModel = require('../../models/index');

const deleteUser = async (req, res) => {
    try{     
      const userId = req.params.userId; 
      return userModel.User.findOne({
        where: {id: userId}
      }).then( 
        result=> {
          result.destroy();
          return res.status(200).json({
            message: "User deleted",
          })
        }).catch((e)=>{
          res.status(404).send('User can not be deleted' + e);
         });
    }
    catch (e) {
      res.status(201).json({
        message: 'Error when deleting user',
    })
    }
};

exports.deleteUser = deleteUser;



  // 
  // const deleted = await userModel.User.deleteOne({where: {id: userId}});
  // if (deleted) {
  //   return res.json(
  //     {
  //     message: "Post deleted",
  //     status: deleted
  //     });
  // }
  // return res.json(userId);
 