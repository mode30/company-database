const express=require('express');
const router=express()
const Company=require('../controller/companyController')


router.get('/company',Company.getAllCompany);
router.post('/add_company',Company.postCompany)
router.get('/company/staff',Company.getStaffInSpecificCompany)
module.exports=router;