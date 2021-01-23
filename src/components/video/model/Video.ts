import { model, Schema } from "mongoose";
import IVideo from "./IVideo";

const videoSchema = new Schema({
  url: { type: String, required: true },
  title: { type: String, required: true },
  duration: { type: String, required: true },
  courseId: { type: String, required: true },
  isFree: { type: Boolean, default: false },
  description: { type: String },
  attachment: {
    type: [{ data: String, contentType: String, fileName: String }],
  },

});

export default model<IVideo>("Video", videoSchema);
