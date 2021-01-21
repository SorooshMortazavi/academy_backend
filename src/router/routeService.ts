import { Application } from "express";
import RouterHandle from "./router";

import studentRouter from '../components/student/studentRouter'
import masterRouter from '../components/master/masterRouter'

export default  class RouteService {
    private routerHandle:RouterHandle
    private app:Application
    constructor(app:Application){
        this.routerHandle = new RouterHandle()
        this.app = app
        this.bindRouter()
    }
    
    bindRouter(){
        this.routerHandle.registerRouter('/api/v1/student',studentRouter)
        this.routerHandle.registerRouter('/api/v1/master',masterRouter)
    }
    
    run(){
        this.routerHandle.getRouters().forEach((router,route)=>{
            this.app.use(route,router)
        })
    }
}