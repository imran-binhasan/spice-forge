import mongoose from "mongoose";
import { CartType } from "../shared/types";
const cartSchema = new mongoose.Schema<CartType>({
    menuId : {type: String, required:true},
    orderEmail : {type: String, required:true},
    name : {type: String, required:true},
    image:{type: String, required:true},
    category:{type: String, required:true},
    price:{type: Number, required:true}
})

const Carts = mongoose.model('cart-list', cartSchema);
export default Carts;