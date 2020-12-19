import { Document } from 'mongoose';

export interface Payload {
    name: string;
    email: string;
    type?: string;
    iat?: number;
    expiresIn?: string;
}