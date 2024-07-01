const Company=require('../models/companyModel');
const Staff=require('../models/staffModel')
const {Op}=require('sequelize');
exports.getAllCompany=(req,res)=>{
    Company.findAll().then((company) => {
        if(!company){
            res.status(404).json({
                message:"not found or list empty",
            })
        }
        return res.status(201).json({
            message:"all company found",
            company:company
        })
        
    }).catch((err) => {
        
        console.log(err);
        res.status(500).json({
            err:err.message
        })
        
    });

}
exports.postCompany=(req,res)=>{
    const{company_name,company_sector}=req.body
    Company.create({
        company_name,
        company_sector
    })
    .then((company) => {
        res.status(200).json({
            message:"company created",
            company:company
        })
        
    }).catch((err) => {
        res.status(500).json({

        mesage:"Server Error",
        error:err
        })
    });
}
exports.getStaffInSpecificCompany=(req,res)=>{
    const {companyName}=req.query
    if(!companyName){
        res.status(404).json({
            message:"CompanyName query not provided"
        })
    }
    Company.findOne({
        where:{
            company_name:{
                [Op.like]:`%${companyName}%`}
        },include:[{
            model:Staff,
            // attributes:""

        }]
    }).then((company) => {
        if(!company){
         res.status(404).json({
                message:"Company not found"
            })
        }
        return res.status(201).json({
            message:"company and list of staffs found",
            company:company
        })
        
    }).catch((err) => {
        console.log(err)
        res.status(500).json({
            error:"Server Error",
            err:err
        })
    });
}