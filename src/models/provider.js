const mongoose= require("mongoose")

const {Schema} = mongoose

const Providerschema = new Schema({
    id: {
        type: String
    },
    name: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    adress: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true,
        minLength: 5,
        maxLength: 9 

    },
    email: {
        type: String,
        require: true
    },
    typeProvider: {
        type: String,
        require: true
    },
    isdeleted: {
        type: Boolean,
        default: false
    }
})
module.exports = mongoose.model("providers", Providerschema)