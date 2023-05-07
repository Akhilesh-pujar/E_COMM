import mongoose, { Schema, mongo } from 'mongoose';


const ProductSchema = new Schema({
    title:{type : String ,require:true},
    slug:{type : String ,require:true, unique:true},
    desc:{type : String ,require:true},
    img:{type : String ,require:true},
    category:{type : String },
    size:{type : String },
    price:{type : Number ,require:true},
    availableQty:{type : Number ,require:true},
 

}, {timestamps:true});

mongoose.models = {}

export default mongoose.model("Product",ProductSchema);