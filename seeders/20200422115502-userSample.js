'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
        nipt: '000000123',
        username : 'Nensi',
        phone : '0697838290',
        email : 'nensiahmetbej@gmail.com',
        password : 'testing',
        createdAt : new Date(),
        updatedAt : new Date(),
        deletedAt: new Date(),
      }], {});
    },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
