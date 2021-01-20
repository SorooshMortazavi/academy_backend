import {Router} from 'express'
import StudentController from './StudentController'
const studentRouter = Router()
const studentController = new StudentController

studentRouter.get('/',studentController.index)

export default studentRouter