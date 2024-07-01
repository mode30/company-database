const express=require('express');
const router=express()
const Staff=require('../controller/staffController')


router.get('/staff',Staff.getAllStaffs);
router.post('/add_staff',Staff.postStaff);
router.get('/staff/name',Staff.findByName);
module.exports=router;