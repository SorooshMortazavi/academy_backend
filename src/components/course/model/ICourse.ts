import { Document } from "mongoose";
import levelStatus from "./levelStatus";

interface ICourse extends Document {
    masterId:string
    categoryId:string
    level:levelStatus
    rating:number
    description:string
    isFree:boolean
}