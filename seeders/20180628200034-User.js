'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('users', [{    
      id: 1, 
      username: 'kjgasser',
      email: 'Kelsey',
      password: 'female',
      status: 'elf',
      createdAt: false,
      updatedAt: false
      }], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('users', null, {});
  }
};
