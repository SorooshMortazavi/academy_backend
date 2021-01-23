import { Application } from "express";
import * as cors from 'cors'
import * as bodyParser from 'body-parser'


export default function boot(app:Application){
    app.use(cors())
    app.use(bodyParser.urlencoded())
    app.use(bodyParser.json())
}