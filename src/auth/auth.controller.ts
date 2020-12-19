import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { UserService } from '../shared/user.service';
import { RegisterDTO, LoginDTO } from './auth.dto';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { Payload } from '../types/payload';


@Controller('auth')
export class AuthController {
    constructor(
        private userService: UserService,
        private authService: AuthService,
        ){

    }

    @Get()
    @UseGuards(AuthGuard('jwt'))
    tempAuth(){
        return {auth: 'works'};
    }

    @Post('login')
    async login(@Body() userDto: LoginDTO){
        const  user = await this.userService.findByLogin(userDto)
        const payload: Payload = {
            name: user.name,
            email: user.email,
            type: user.type,
        }

        const token = await this.authService.signPayload(payload);
        
        return {user,token};
    }

    @Post('register')
    async register(@Body() userDTO: RegisterDTO){
        const  user = await this.userService.create(userDTO)
        const payload: Payload = {
            name: user.name,
            email: user.email,
            type: user.type
        }

        const token = await this.authService.signPayload(payload);
        
        return {user,token};

    }

    // @Get()
    // findAll(): Promise<User[]> {
    //     return this.userService.findAll();
    // }
}
