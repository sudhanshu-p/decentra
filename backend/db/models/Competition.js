const mongoose=require("mongoose");
const CompetitionSchema=new mongoose.Schema({
    title:String,
    details:String,
    ParticipantStudents:[{type:mongoose.Schema.Types.ObjectId,ref:"StudentSchema"}],
    Organization:{type:mongoose.Schema.Types.ObjectId,ref:"OrganizationSchema"},
    JoinCode:Number
});
module.exports=mongoose.Schema("CompetitionSchema",CompetitionSchema);