import { IsEmail, IsNotEmpty } from "class-validator";

export class LoginDTO {
    @IsNotEmpty({
        message: 'El email es requerido'
    })
    @IsEmail({},{
        message:'El email no es correcto'
    })
    email:string;
    
    @IsNotEmpty({
        message: 'El password es requerido'
    })
    password:string;
}

export class RegisterDTO{
    @IsNotEmpty({
        message: 'El nombre de usuario es requerido'
    })
    name:string;
    
    @IsNotEmpty({
        message: 'El email es requerido'
    })
    @IsEmail({},{
        message:'El email no es correcto'
    })
    email:string;

    @IsNotEmpty({
        message: 'El password es requerido'
    })
    password:string;

    @IsNotEmpty({
        message: 'El password es requerido'
    })
    password_confirm:string
    
    @IsNotEmpty({
        message: 'El tipo de usuario es requerido'
    })
    type:string
}
