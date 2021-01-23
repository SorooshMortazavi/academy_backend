import IRepository from "../../../contracts/IRepository";
import IStudent from "../model/IStudent";

interface IStudentMongoRepository extends IRepository<IStudent>{
    create(params:IStudent):Promise<IStudent>
}

export default IStudentMongoRepository