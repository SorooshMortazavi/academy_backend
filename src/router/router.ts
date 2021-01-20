import {Router} from 'express'
class RouterHandle {
    private routers:Map<string,Router> = new Map<string,Router>()

    registerRouter(route:string,router:Router){
        this.routers.set(route,router)
    }
    
    getRouters(){
        return this.routers
    }
}
export default RouterHandle