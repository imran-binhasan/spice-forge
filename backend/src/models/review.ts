import mongoose from "mongoose";
import { ReviewType } from "../shared/types";

const reviewSchema = new mongoose.Schema<ReviewType>({
    name:{type:String, required:true},
    details:{type:String, required:true},
    rating:{type:Number, required:true}
});

const Reviews = mongoose.model('review-list',reviewSchema);
export default Reviews;