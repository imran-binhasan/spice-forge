
import mongoose from "mongoose";
import { MenuType } from "../shared/types";
const menuSchema = new mongoose.Schema<MenuType>({
    name:{type: String, required:true},
    recipe:{type: String, required:true},
    image:{type: String, required:true},
    category:{type: String, required:true},
    price:{type: Number, required:true}
})

const Menus = mongoose.model('menu-list',menuSchema);
export default Menus;
