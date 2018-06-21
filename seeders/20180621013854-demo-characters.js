'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('characters', [{     
      username: 'kjgasser',
      character_name: 'Kelsey',
      gender: 'female',
      race: 'elf',
      class: 'rogue',
      dex: 10,
      intel: 10,
      cha: 10,
      stre: 10,
      con: 10,
      wis: 10,
      acrobatics: 2,
      animal_handling: 3,
      arcana: 4,
      athletics: 2,
      deception: 3,
      history: 4,
      insight: 4,
      intimidation: 4,
      investigation: 4,
      medicine: 4,
      nature: 4,
      perception: 4,
      performance: 4,
      persuasion: 4,
      religion: 4,
      sleight: 4,
      stealth: 4,
      survival: 4,
      }], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('characters', null, {});
  }
};
