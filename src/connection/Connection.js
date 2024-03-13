import mongoose from "mongoose";

async function ConnectMongo() {
    try{
        await mongoose.connect('mongodb+srv://ashjacks151:AshJack_2023@cluster0.bozxomz.mongodb.net/')
        console.log('Connect Succeed !');
    }
    catch(error){
        console.log('Connection Failed :-( ', error);
    }
}

export default ConnectMongo;