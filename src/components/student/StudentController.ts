import { NextFunction, Request, Response } from "express";
import IStudent from "./model/IStudent";
import StudentMongoRepository from "./repositories/StudentMongoRepository";
import { json } from "body-parser";

export default class StudentController {
  private name = "soroosh";
  private studentRepository: StudentMongoRepository;
  constructor() {
    this.studentRepository = new StudentMongoRepository();
    this.index = this.index.bind(this);
    this.registerUser = this.registerUser.bind(this);
  }
  async index(req: Request, res: Response, next: NextFunction) {
    // const student: IStudent = await StudentMongoRepository.create({
    //   name: "soroosh",
    //   lastName: "mortazavi",
    //   password: "12345678",
    //   mobile: "09393857027",
    //   email: "soroosh.mortazavi@gmail.com",
    // });
    // res.status(200).send({
    //   success: true,
    //   student,
    // });
  }
  async registerUser(req: Request, res: Response, next: NextFunction) {
    try {
      const body = req.body
      const student: IStudent = await this.studentRepository.create(
        {
          name:body.name,
          lastName:body.lastName,
          email:body.email,
          mobile:body.mobile,
          password:body.password,
          ...body
        }
      )
     
      res.send({
        success: true,
        student
      });
    } catch (error) {
      next(error);
    }
  }
}
