const express=require("express");
const ClassroomSchema=require("../db/models/Classroom");
const CounterSchema=require("../db/models/counter");
const studentSchema=require("../db/models/student");
const { default: mongoose } = require("mongoose");
var ObjectID = require('mongodb').ObjectID;
const router=express.Router();
let counter=0;
router.post("/create",async(req,res)=>{
    counter++;
    await ClassroomSchema.create({
        Title:req.body.Title,
        Details:req.body.Details,
        JoinCode:counter,
        Organization:req.body.Organization
    })
    .then(async()=>{
        res.send("Classroom Created");
    }
      
    )
})
router.get("/:orgid/getall",async(req,res)=>{
    await ClassroomSchema.find({Organization:req.params.orgid})
    .then((classes)=>{
        if(classes.length!=0){
            res.send(classes);
        }
        else{
            res.send("No classes found");
        }
    })
    .catch((err)=>res.send(err))
})
router.get("/:classid",async(req,res)=>{
    await ClassroomSchema.findOne({_id:req.params.classid})
    .then((classroom)=>{
        if(classroom){
            res.send(classroom);
        }
        else{
            res.send("No such classroom found");
        }
    })
    .catch((err)=>{
        res.send(err);
    })
})
router.put("/join",async (req,res)=>{
    // await ClassroomSchema.findOneAndUpdate({JoinCode:req.body.code},{$addToSet:{ParticipantStudent:[req.body.id]}}).then(async(result)=>{
    //     await studentSchema.updateOne({_id:req.body.id},{$addToSet:{Classrooms:[result._id]}}).then(res.send("Added to classroom"));
    //     console.log(result._id);
    // })
    // .catch(err=>res.send(err));\
    try {
        console.log(req.body.id);
        const classroom = await ClassroomSchema.findOneAndUpdate(
          { JoinCode: req.body.code },
          { $addToSet: { ParticipantStudent: [req.body.id] } }
        );
    
        await studentSchema.findOneAndUpdate(
          {_id:req.body.id },
          { $addToSet: { Classrooms: [classroom._id] } }
        ).then((ob)=>{
           res.send(ob);
            console.log(classroom._id);
        })
        
      } catch (err) {
        res.send(err);
      }
});
router.get("/:classid/students",async(req,res)=>{
    await ClassroomSchema.find({
        _id:req.params.classid
    })
    .populate('ParticipantStudent')
    .then((classroom)=>{
        res.send(classroom);
    })
    .catch((err)=>{
        res.send(err);
    })
})

module.exports=router;
