const userModel = require('../../models/index');

const updateUser = async (req, res) => {
    try{
      const { userId } = req.params.userId;
      const [ updated ] = await userModel.User.update(
        {
        nipt: req.body.nipt,
        username: req.body.username,
        phone: req.body.phone,
        email: req.body.email,
        password: bcrypt(req.body.password)
      }, 
      {
        where: { id: userId }
      }).then( (result) => res.json(result) );
      if(!updated)
      {
        throw new Error('User not found');
      }
    }

    catch (e) {
      return res.status(500).send(e.message);
    }
};

exports.updateUser = updateUser;