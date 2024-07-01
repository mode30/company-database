const {Sequelize,DataTypes}=require('sequelize')
const sequelize=require("../utlis/Database")

const Staffs=sequelize.define("Staffs",{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    firstname:{
        type:DataTypes.STRING,
        allowNull:false
    },
    lastname:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    companyId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:"Companies",
            key:'id'
        }

    },
    departmentId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:"Departments",
            key:'id',

        }
        
    }

})
module.exports=Staffs;
