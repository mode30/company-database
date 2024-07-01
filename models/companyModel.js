// // models/companyModel.js
// const { Sequelize, DataTypes } = require('sequelize'); // Import DataTypes from Sequelize
// const sequelize = require('../utlis/Database'); // Correct path for your Sequelize instance
// const { tableName } = require('sequelize/lib/model');

// const Company = sequelize.define('Company', {
//     id: {
//         type: DataTypes.INTEGER, 
//         allowNull: false,
//         autoIncrement: true,  
//         primaryKey: true 
//     },
//     company_name: {
//         type: DataTypes.STRING, 
//         allowNull: false
//     },
//     company_sector: {
//         type: DataTypes.STRING, 
//         allowNull: true
//     },{

//     tableName:"Companies"
//     }
// });

// module.exports = Company;

// models/companyModel.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utlis/Database');

const Company = sequelize.define('Company', {
    id: {
        type: DataTypes.INTEGER, 
        allowNull: false,
        autoIncrement: true,  
        primaryKey: true 
    },
    company_name: {
        type: DataTypes.STRING, 
        allowNull: false
    },
    company_sector: {
        type: DataTypes.STRING, 
        allowNull: true
    }
}, {
    tableName: "Companies"  // This is where you put the tableName option
});

module.exports = Company;