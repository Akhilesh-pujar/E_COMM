import mongoose, { Schema } from 'mongoose';


const OrderSchema = new Schema({
    userId:{type : String ,require:true},
    products:[

        {
            productId:{type:String},
            quantity:{type:Number, default:1}
        }
    ],
    adress:{type:String, require:true},
    amount:{type:Number, require:true},
    amount:{type:String , default:'Pending',require}

}, {timestamps:true});


mongoose.models = {}

export default mongoose.model("Order",OrderSchema);