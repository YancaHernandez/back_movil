import * as mongoose from 'mongoose';

export const MenusSchema = new mongoose.Schema({
    name: {
        type: String,
        default: 'Admin'
    },
    description:String,
    created: {
        type:Date,
        default:Date.now
    }
});