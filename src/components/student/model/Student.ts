import { Schema, model } from "mongoose";
import Address from "./Address";
import IStudent from "./IStudent";

const studentSchema = new Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  mobile: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
  courses: { type: [String], default: [] },
  addresses: { type: [Address], default: [] },
});

export default model<IStudent>("Student", studentSchema);
