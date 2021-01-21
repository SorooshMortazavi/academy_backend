import {Router} from 'express'
import MasterController from './masterController'
const router = Router()
const controller = new MasterController()

router.get('/',controller.index)

export default router