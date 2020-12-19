import * as mongoose from 'mongoose';

export const DishesSchema = new mongoose.Schema({
    title: String,
    description:String,
    price: Number,
    table_id:{ 
        type: 'ObjectId', 
        ref: 'Menus' 
    },
    created: {
        type:Date,
        default:Date.now
    }
});
