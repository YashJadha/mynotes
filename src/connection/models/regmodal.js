import mongoose, { mongo } from "mongoose";
import ConnectMongo from "../Connection";
import bcrypt from 'bcrypt'
ConnectMongo();

let validateEmail = function (email) {
    let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const regSchema = new mongoose.Schema({
    name: {
        unique: true,
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate: validateEmail,
    },
    password: {
        type: String,
        unique: true, 
        required: true
    }
})

regSchema.pre('save', async function(next) {
    try{
        const salt = await bcrypt.genSalt(10);
        const haspass = await bcrypt.hash(this.password, salt);
        this.password = haspass;
        next();
    }
    catch(error){
        console.log(error);
    }
})  

const RegModel = mongoose.models.RegModel || mongoose.model('RegModel', regSchema);
export {RegModel};