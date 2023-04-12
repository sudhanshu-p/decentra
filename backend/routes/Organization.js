const express=require("express");
const OrganizationSchema=require("../db/models/organization");
const router=express.Router();
router.post("/signup",(req,res)=>{
    OrganizationSchema.create({
        Name:req.body.Name,
        Email:req.body.Email,
        Wallet:req.body.Wallet,
        Mobile:req.body.Mobile
    })
    .then(
        res.send("Organization Added")
    )
})
router.post("/login",async(req,res)=>{
    await OrganizationSchema.findOne({Wallet:req.body.Wallet}).exec().then((org)=>{if(org){res.send(org)}else{res.send("No Such account found")}}).catch(err=>res.send(err))
})
module.exports=router;
