import * as express from 'express'
import {Application} from 'express'
import RouteService from './router/routeService'
import boot from './boot'

class App {
 private port: number
 private app: Application
 private routeService:RouteService
    constructor(port: number){
        this.port = port
        this.app = express()
        this.routeService = new RouteService(this.app)
    }

    start() {
        boot(this.app)
        this.routeService.run()
        this.app.listen(this.port,()=> console.log(`app is running on port ${this.port}`))
    }
}
export default App