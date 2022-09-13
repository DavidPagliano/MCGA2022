const mongoose= require("mongoose")

const {Schema} = mongoose

const ProductSchema = new Schema({
    id: {
        type: String
    },
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    isdeleted: {
        type: Boolean,
        default: false
    }
})
module.exports = mongoose.model("products", ProductSchema)