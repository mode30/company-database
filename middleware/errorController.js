const express=require('express')
const app=express
const router=express.Router()


router.get=((err,req,res)=>{
    res.status(500).status({
        message:"Server Error",
        err:err
    })
})
module.exports=router;