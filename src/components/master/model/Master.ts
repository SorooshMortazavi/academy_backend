import { Schema, model } from "mongoose";
import IMaster from "./IMaster";
import masterStatus from "./masterStatus";

const masterSchema = new Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true,unique:true },
  password: { type: String, required: true },
  mobile: { type: String, required: true,unique:true },
  createdAt: { type: Date, default: Date.now() },
  status:{type:masterStatus,default:masterStatus.DE_ACTIVE},
  about:{type:String,required:true},
  picture:{type:String}  
});

export default model<IMaster>("Master", masterSchema);