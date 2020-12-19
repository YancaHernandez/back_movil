import * as mongoose from 'mongoose';

export const DishesSchema = new mongoose.Schema({
    name: String,
    description:String,
    imagen:String,
    menus_id:{ 
        type: 'ObjectId', 
        ref: 'Menus' 
    },
    created: {
        type:Date,
        default:Date.now
    }
});
