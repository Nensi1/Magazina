// const getSingleResource = require('./getUser').getUser;
const createSingleResource = require('./createUser').createUser;
const getAllResources = require('./getAllUsers').getAllUsers;
const getSingleResource = require('./getUser').getUser;
const updateSingleResource = require('./updateUser').updateUser;
const deleteSingleResource = require('./deleteUser').deleteUser;
const findByLoginResource = require('./findByLogin').findByLogin;

// exports for users controller
module.exports = {
    getSingleResource,
    createSingleResource,
    getAllResources,
    updateSingleResource,
    deleteSingleResource,
    findByLoginResource
};