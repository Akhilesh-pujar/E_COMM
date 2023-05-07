import mongoose, { Schema } from 'mongoose';


const Userschema = new Schema({
    name:{type : String ,require:true},
    email:{type : String ,require:true, unique:true},
    password:{type : String ,require:true},
    
 

}, {timestamps:true});


mongoose.models = {}

export default mongoose.model("Product",ProductSchema);