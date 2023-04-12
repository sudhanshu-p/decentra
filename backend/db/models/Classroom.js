const mongoose=require("mongoose");
const ClassroomSchema=new mongoose.Schema({
    Title:String, 
    Details:String,
    JoinCode:Number,
    ParticipantStudent:[{type:mongoose.Schema.Types.ObjectId,ref:"StudentSchema",default:undefined}],
    Organization:{type:mongoose.Schema.Types.ObjectId,ref:"OrganizationSchema"}
})
module.exports=mongoose.model("ClassroomSchema",ClassroomSchema);