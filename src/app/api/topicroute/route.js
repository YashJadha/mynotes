import ConnectMongo from "@/connection/Connection";
import Topicmodel from "@/connection/models/Models";
import { NextResponse } from "next/server";

ConnectMongo();
export async function POST(req){
    try{
        const {title, description} = await req.json();
        const res = await Topicmodel.create({title, description});
        console.log(res);
        return NextResponse.json({status: 200, msg: "your data has posted", data: res});
    }
    catch(error){
        return NextResponse.json({status: 500}, {msg: "Data Can't Posted !"}, {Err: error})
    }
}

export async function GET(req){
    try{
        const res = await Topicmodel.find();
        return NextResponse.json({status: 200, msg: "your data ", data: res}); 
    }
    catch(error){
        return NextResponse.json({status: 500}, {msg: "Data Can't find "}, {Err: error})
    }
}

export async function DELETE(req){
    try{
        const res = await Topicmodel.deleteMany();
        return NextResponse.json({status: 200}, {msg: "Your all data has been deleted !"});
    }
    catch(error){
        return NextResponse.json({status: 500}, {msg: "Your data can't deleted :-("})
    }
    
}