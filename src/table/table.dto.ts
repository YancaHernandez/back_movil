import { IsInt, IsNotEmpty, IsNumber } from 'class-validator';
export class CreateTableDto {
    
    @IsNotEmpty({
        message:'El nombre es requerido'
    })
    name: string;

    @IsNotEmpty({
        message:'La capacidad es requerida'
    })
    @IsInt({
        message:'La capacidad debe ser un numero'
    })
    capacity: number;
    status: string; //Activa,Inactiva,Anulada,En Uso
}

export class UpdateTableDto {
    name: string;
    capacity: number;
    status: string; //Activa,Inactiva,Anulada,En Uso
}