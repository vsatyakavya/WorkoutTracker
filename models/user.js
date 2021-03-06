const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  day : {
      type : Date,
      default : Date.now
  },
  exercises: [
    {
      type: {type: String, required: true},
      name: {type: String, required: true},
      duration :{type : Number , required :true},
      weight : {type: Number, required:true},
      reps :{type : Number , required :true},
      sets : {type: Number, required:true},
      distance : {type:Number , required:true}

    }]
  
  
  
});

const User = mongoose.model("User", userSchema);

module.exports = User;

