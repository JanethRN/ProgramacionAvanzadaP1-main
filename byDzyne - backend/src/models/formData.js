import { Schema, model } from 'mongoose';

const formDataSchema = new Schema({
  name  : {
    type      : String,
    required  : true
  },
  lastname  : {
    type      : String,
    required  : true 
  },
  ci  : {
    type      : String,
    required  : true,
    unique    : true
  },
  telf  : {
    type      : String,
    required  : true 
  },
  email  : {
    type      : String,
    required  : true,
    unique    : true
  },
  date  : {
    type      : Date,
    required  : true 
  },
  country  : {
    type      : String,
    required  : true 
  },
  location  : {
    type      : String,
    required  : true 
  },
  gender  : {
    type      : String,
    required  : true 
  },
  imag  : {
    type      : Buffer,
    required  : true 
  },
  imag2  : {
    type      : Buffer
  },
  validacion1  : {
    type      : String,
    required  : true 
  },
  validacion2  : {
    type      : String,
    required  : true 
  }
})

export default model('FormPreRegistro', formDataSchema);