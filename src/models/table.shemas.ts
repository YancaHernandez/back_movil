import { Prop } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export const TableSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'El nombre es requerido']
    },
    capacity: {
        type: Number,
        required: [true, 'La capacidad es requerida']
    },
    status: {
        type:String,
        default:'Activo'
    }
});