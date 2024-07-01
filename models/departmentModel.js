// models/departmentModel.js
const { Sequelize, DataTypes } = require('sequelize'); // Import Sequelize and DataTypes
const sequelize = require('../utlis/Database'); // Import the Sequelize instance
const Company=require('../models/companyModel')
const Department = sequelize.define('Department', {
    id: {
        type: DataTypes.INTEGER, // Use DataTypes.INTEGER
        allowNull: false,
        autoIncrement: true, // Correct spelling
        primaryKey: true
    },
    department_name: { // Corrected the typo in the field name
        type: DataTypes.STRING, // Use DataTypes.STRING
        allowNull: false,
        unique: true
    },
    company_name:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:"Companies",
            Key:'id'

        }
    }
});

module.exports = Department;
