import { NextFunction, Request, Response } from "express";
import StudentModel from "./model/Student";
import IStudent from "./model/IStudent";

export default class StudentController {
  private name = "soroosh";
  constructor() {
    this.index = this.index.bind(this);
  }
  async index(req: Request, res: Response, next: NextFunction) {
    const student: IStudent = await StudentModel.create({
      name: "soroosh",
      lastName: "mortazavi",
      password: "12345678",
      mobile: "09393857027",
      email: "soroosh.mortazavi@gmail.com",
    });
    res.status(200).send({
      success: true,
      student,
    });
  }
}
