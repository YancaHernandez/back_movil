import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { User } from '../types/user';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { RegisterDTO, LoginDTO } from '../auth/auth.dto';

import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private userModel: Model<User>) {
    }

    private sanitizeUser(user: User){
        user.password = '';
        return user;
        return user.depopulate('password');
    }

    async create(userDTO: RegisterDTO){
        const {email}= userDTO;
        const user = await this.userModel.findOne({email});
        if(user){
            throw new HttpException('El email ya existe',
            HttpStatus.BAD_REQUEST);
        }

        const createUser = new this.userModel(userDTO);
        await createUser.save();
        return this.sanitizeUser(createUser);
    }

    async findByLogin(userDTO: LoginDTO){
        const {email, password } = userDTO;
        const user =  await this.userModel.findOne({email});
        if(!user){
            throw new HttpException('Credenciales invalidas',
            HttpStatus.UNAUTHORIZED);
        }

        if (await bcrypt.compare(password, user.password)){
            return this.sanitizeUser(user);
        } else{
            throw new HttpException('Credenciales invalidas',
            HttpStatus.UNAUTHORIZED);
        }
    }
    
    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }

    async findByPayload(payload: any){
        const {email} = payload;
        return await this.userModel.findOne({email});
    }
}
