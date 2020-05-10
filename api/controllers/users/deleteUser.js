const userModel = require('../../models/index');

const deleteUser = async (req, res) => {
    try{     
      const userId = req.params.userId; 
      return userModel.User.findOne({
        where: {id: userId}
      }).then( 
        result=> {
        if(result) {
          result.destroy();
          return res.status(200).json({
            message: "User deleted",
          })
      }
      else{
        return res.status(202).json({
          message: "User can't be found",
        })
      }
    })
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
 