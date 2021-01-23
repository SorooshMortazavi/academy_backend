import { NextFunction, Request, Response } from "express";

class VideoController {

    constructor(){
        this.index = this.index.bind(this)
    }
    
    index(rex:Request,res:Response,next:NextFunction){

    }
}

export default VideoController
