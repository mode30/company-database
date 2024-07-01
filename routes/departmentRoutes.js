const express=require('express');
const router=express()
const Department=require('../controller/departmentController')


router.get('/department',Department.getAllDepartment);
router.post('/add_department',Department.postDepartment)
module.exports=router;