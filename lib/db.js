const {Sequelize} = require('sequelize');
 // You can choose to connect to sqlite here if you wish to
 // Also, if you are using mysql on your local machine you need to update the credentials below
 const sequelize = new Sequelize('finalproject-api', 'root', '12345678', {
    host: 'localhost',
    dialect : 'mysql'
  });