import {Router} from 'express'
import VideoController from './VideoController'

const router = Router()
const controller:VideoController = new VideoController()

router.get('/', controller.index)

export default router