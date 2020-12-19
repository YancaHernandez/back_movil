import { IsInt, IsNotEmpty, IsNumber } from 'class-validator';
export class CreateTableDto {
    
    @IsNotEmpty({
        message:'El nombre es requerido'
    })
    name: string;
    description: number;
    status: string; //Activa,Inactiva,Anulada,En Uso
}

export class UpdateTableDto {
    name: string;
    description: number;
    status: string; //Activa,Inactiva,Anulada,En Uso
}