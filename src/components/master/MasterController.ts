import { NextFunction, Request, Response } from "express";

class MasterController {
    constructor(){
        this.index = this.index.bind(this)
    }

    index(req:Request,res:Response,next:NextFunction){
        res.send({
            success:true,
            master:[]
        })
    }
}

export default MasterController