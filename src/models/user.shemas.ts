import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';

export const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        default: 'Admin',
        required: [true, 'El nombre es requerido']
    },
    email:String,
    password:String,
    type:{
        type: String,
        default: 'client'
    },
    created: {
        type:Date,
        default:Date.now
    }
});

UserSchema.pre('save',async function(next:
mongoose.HookNextFunction){
    try {
        if(!this.isModified('password')){
            return next();
        }
        const hashed = await bcrypt.hash(this['password'],10);
        this['password'] = hashed;
        return next();
    } catch (error) {
        return next(error);
    }
});