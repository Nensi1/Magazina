'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
        nipt: '00000000',
        username : 'Nensi',
        phone : '0697838291',
        email : 'nensiahmetbeja@gmail.com',
        createdAt : new Date(),
        updatedAt : new Date(),
        password : 'testing'
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
