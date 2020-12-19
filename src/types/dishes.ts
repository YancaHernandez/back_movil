import {Document} from 'mongoose';

export interface Dishes extends Document{
    title: string,
    description: string,
    price: number,
    table_id: string,
    status: string;
    created: Date;
}