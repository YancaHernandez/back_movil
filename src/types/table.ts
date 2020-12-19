import {Document} from 'mongoose';

export interface Table extends Document{
    name: string;
    capacity: number;
    status: string;
    created: Date;
}