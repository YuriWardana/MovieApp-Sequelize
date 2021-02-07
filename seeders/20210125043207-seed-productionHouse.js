'use strict';
module.exports = {
  up:  (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   let data =
   [
    {
        "name_prodHouse":"Walt Disney Studios",
        "headquarters": "Burbank, California,United States"
    },
    {
        "name_prodHouse":"Pixar",
        "headquarters": "Emeryville, California,United States" 
    },
    {
        "name_prodHouse":"Warner Bros",
        "headquarters": "Los Angeles, California,United States"
    },
    {
        "name_prodHouse":"universal Pictures",
        "headquarters": "universal City, California,United States"
    },
    {
        "name_prodHouse":"Paramount Picture",
        "headquarters": "Los Angeles, California,United States"
    }
]
  

   data.forEach(e=>{
     e.createdAt = new Date()
     e.updatedAt = new Date()
   })
   return queryInterface.bulkInsert('ProductionHouses',data,{})

  },

  down:  (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('ProductionHouses',null,{})
  }
};
