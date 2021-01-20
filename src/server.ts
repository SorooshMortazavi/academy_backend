import {config} from 'dotenv'
config()
import App from './App'
import mongooseStart from '../infrastructure/mongoose'

const application: App = new App(process.env.APP_PORT as unknown as number)
application.start()
mongooseStart()
