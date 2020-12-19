import { UserSchema } from '../models/user.shemas';
import * as mongoose from 'mongoose';
import { Request, Response } from 'express';
 
import {
    ArgumentsHost, 
    Catch, 
    ExceptionFilter, 
    HttpException, 
    HttpStatus
} from "@nestjs/common";

@Catch()
export class HttExceptionFilter implements ExceptionFilter{
    catch(exception: any, host: ArgumentsHost){
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        const status = exception.errors || exception.response
        ? 400
        : HttpStatus.INTERNAL_SERVER_ERROR;
        
        let errors = [];
        if(exception.response){
            errors = exception.response.error;
        }else{
            for (const key in exception.errors) {
                if (Object.prototype.hasOwnProperty.call(exception.errors, key)) {
                    const {message} = exception.errors[key];
                    errors.push(message)                
                }
            }
        }

        const errorResponse = {
            code: status,
            timestamp: new Date().toLocaleDateString(),
            path: request.url,
            method: request.method,
            errors
                // status !== HttpStatus.INTERNAL_SERVER_ERROR ? 
                // exception.message || exception.message ||
                // null
                // :'Internal Server Error',
        }

        return response.status(status).json(errorResponse);
    }
}