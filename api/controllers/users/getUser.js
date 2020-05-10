const userModel = require('../../models/index');

const getUser = async (req, res) => {
    try{
        const { userId } = req.params.userId;
        const user = await userModel.User.findOne({
          where: { id: postId },
          include: [
            {
              model: models.Comment,
              as: 'comments',
              include: [
               {
                model: models.User,
                as: 'author',
               }
              ]
            },
            {
              model: models.User,
              as: 'author'
            }
          ]
        });
        if (post) {
          return res.status(200).json({ post });
        }
        return res.status(404).send('Post with the specified ID does not exists');
        }
    catch(err){
        res.send('error when getting all users: ' + err)
    }
};

exports.getUser = getUser;

   