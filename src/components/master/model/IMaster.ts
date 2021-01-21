import { Document } from "mongoose";
import masterStatus from './masterStatus'

interface IMaster extends Document{
    name:string;
    lastName:string;
    email:string;
    password:string;
    mobile:string;
    createdAt:Date;
    status:masterStatus
    about:string,
    picture:string
}

export default IMaster