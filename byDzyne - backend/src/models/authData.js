import { Schema, model } from "mongoose"

const authDataSchema = new Schema({
  username  : {
    type      : String,
    required  : true,
    unique    : true
  },
  password  : {
    type      : String,
    required  : true 
  } 
})


export default model('User', authDataSchema);