import * as mongoose from 'mongoose';

export const OrdesSchema = new mongoose.Schema({
    platillos_id:{ 
        type: 'ObjectId', 
        ref: 'Platillos' 
    },
    services_id:{ 
        type: 'ObjectId', 
        ref: 'Services' 
    },
    state:String,
    created: {
        type:Date,
        default:Date.now
    }
});