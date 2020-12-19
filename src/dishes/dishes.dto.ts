import { IsInt, IsNotEmpty, IsNumber } from 'class-validator';
export class CreateDishesDto {
    
    @IsNotEmpty({
        message:'El titlo es requerido'
    })
    title: string;

    @IsNotEmpty({
        message:'La descripcion es requerida'
    })
    @IsInt({
        message:'La descripcion debe ser un numero'
    })
    description: string;
    imagen: string;
    mesa_id: object; 
    status: string; //Activa,Inactiva,Anulada,En Uso
}

export class UpdateDishesDto {
    @IsNotEmpty({
        message:'El titlo es requerido'
    })
    title: string;

    @IsNotEmpty({
        message:'La descripcion es requerida'
    })
    @IsInt({
        message:'La descripcion debe ser un numero'
    })
    description: string;
    imagen: string;
    mesa_id: object; 
    status: string;
}