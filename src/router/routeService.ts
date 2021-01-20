import { Application } from "express";
import RouterHandle from "./router";

import studentRouter from '../components/student/StudentRouter'

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
    }
    
    run(){
        this.routerHandle.getRouters().forEach((router,route)=>{
            this.app.use(route,router)
        })
    }
}