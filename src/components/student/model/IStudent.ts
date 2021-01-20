import {Document} from 'mongoose'
import IAddress from './IAddress';
interface IStudent extends Document{
    name:string
    lastName:string
    email:string
    password:string
    mobile:string
    createdAt:Date
    courses:string[]
    addresses:IAddress[]
}

export default IStudent