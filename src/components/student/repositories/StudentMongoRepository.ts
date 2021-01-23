import IPagination from "src/contracts/IPagination";
import IStudent from "../model/IStudent";
import StudentModel from '../model/Student'
import IStudentMongoRepository from "./IStudentMongoRepository";

export default  class StudentMongoRepository implements IStudentMongoRepository{
    constructor(){
        
    }
    findOne(ID: string, relations?: string[]): Promise<IStudent | null> {
        throw new Error("Method not implemented.");
    }
    findMany(params: any, relations?: string[], pagination?: IPagination, sort?: any): Promise<IStudent[]> {
        throw new Error("Method not implemented.");
    }
    async create(params:IStudent): Promise<IStudent> {
        return await StudentModel.create(params)
    }
    updateOne(where: Partial<IStudent>, updateData: Partial<IStudent>): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    updateMany(where: Partial<IStudent>, updateData: Partial<IStudent>): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    deleteOne(ID: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    deleteMany(where: any): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}