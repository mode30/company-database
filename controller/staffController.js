const Staffs=require('../models/staffModel');
const Department=require("../models/departmentModel")
const Company=require('../models/companyModel')
const {Op, Model}=require('sequelize')
exports.getAllStaffs=(req,res,next)=>{
    Staffs.findAll({include:[{
        model:Department,
    },{
        model:Company
    }]}).then((staffs) => {
        if(!staffs){
            res.status(404).json({
                message:"not found or list empty",
            })
        }
        return res.status(201).json({
            message:"all staffs found",
            staffs:staffs,
            
        })
        
    }).catch((err) => {
        
        res.status(500).json({
            message:"Server Not responding cant find staff"
        })

        console.log(err.message)
    });

}
exports.postStaff=(req,res)=>{
    const{firstname,lastname,companyId,departmentId}=req.body
    Staffs.create({
        firstname,
        lastname,
        companyId,
        departmentId
    })
    .then((staff) => {
        res.status(201).json({
            message:"staff created",
            staff
        })
        
    }).catch((error) => {

        console.log(error)
        res.status(500).json({
            error:error.message
        })
    });
}
exports.findByName=(req,res)=>{
    const {name}=req.query
    Staffs.findAll({
        where:{[Op.or]:[
            {firstname:{[Op.like]:`%${name}%`}},
            {lastname:{[Op.like]:`%${name}%`}}
        ]},
        include:[{
            model:Department,
            attribute:'department_name'
        },{
            model:Company,
            attribute:'company_name'
        }]
        
    }).then((staff) => {
        if(staff.length===0){
            res.status(404).json({
                message:"Error cant find staff"
            })
        }
        return res.status(201).json({
            message:"Staff found",
            staff:staff
        })
        
    }).catch((err) => {
        res.status(500).json({
            message:err
        })
    });
    
}