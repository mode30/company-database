const Department=require('../models/departmentModel');
exports.getAllDepartment=(req,res,next)=>{
    Department.findAll().then((department) => {
        if(!department){
            res.status(404).json({
                message:"not found or list empty",
            })
        }
        return res.status(201).json({
            message:"all deparrments found",
            department:department
        })
        
    }).catch((err) => {
        
        console.log(err)
        next(err);
    });

}
exports.postDepartment=(req,res)=>{
    const{department_name,company_name}=req.body
    Department.create({
        department_name,
        company_name
    }).then((departement) => {
        res.status(200).json({
            message:"department created",
            departement
        })
    }).catch((error) => {
        console.log("Server error")
        res.status(500).json({
            message:error.message,
            error:"Server Error"
        })
    });
}