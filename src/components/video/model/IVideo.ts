import { Document } from "mongoose";

interface IVideo extends Document {
    url:string
    title:string
    duration:string
    courseId:string
    isFree:boolean
    description:string
    attachment:any[]
}

export default IVideo