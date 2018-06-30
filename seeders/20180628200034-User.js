'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('users', [{    
      id: 1, 
      username: 'kjgasser',
      email: 'kjgasser@gmail.com',
      password: 'password',
      status: 'active',
      createdAt: false,
      updatedAt: false
      }], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('users', null, {});
  }
};
