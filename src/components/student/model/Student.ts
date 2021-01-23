import { Schema, model,connection } from "mongoose";
import Address from "./Address";
import IStudent from "./IStudent";

const studentSchema = new Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true,unique:true },
  password: { type: String, required: true },
  mobile: { type: String, required: true,unique:true },
  createdAt: { type: Date, default: Date.now() },
  courses: { type: [String], default: [] },
  addresses: { type: [Address], default: [] },
});
const myModel =  model<IStudent>("Student", studentSchema)

// we have to use createIndexes() method on model until unique works
myModel.createIndexes()
export default myModel