import {Document} from 'mongoose';

export interface Dishes extends Document{
    name: string;
    capacity: number;
    status: string;
    created: Date;
}