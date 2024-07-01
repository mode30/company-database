// models/departmentModel.js
const { Sequelize, DataTypes } = require('sequelize'); // Import Sequelize and DataTypes
const sequelize = require('../utlis/Database'); // Import the Sequelize instance
const Department = sequelize.define('Department', {
    id: {
        type: DataTypes.INTEGER, 
        allowNull: false,
        autoIncrement: true, 
        primaryKey: true
    },
    department_name: { 
        type: DataTypes.STRING, 
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
