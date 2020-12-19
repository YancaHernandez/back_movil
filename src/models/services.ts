import * as mongoose from 'mongoose';

export const ServicesSchema = new mongoose.Schema({
    hourStart: {
        type: Date,
    },
    hourEnd: {
        type: Date,
    },
    user_id:{ 
        type: 'ObjectId', 
        ref: 'User' 
    },
    menus_id:{ 
        type: 'ObjectId', 
        ref: 'Mesas' 
    },
    state:String,
    created: {
        type:Date,
        default:Date.now
    }
});