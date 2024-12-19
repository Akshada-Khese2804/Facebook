import mongoose from "mongoose";
let postSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    img:{
        type:String
    },
    likes:{
        type:Array,
        default:[]
    },
},
{timestamps:true}
)
export default mongoose.model('post',postSchema)