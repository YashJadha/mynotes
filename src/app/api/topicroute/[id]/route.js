import { NextResponse } from "next/server";
import ConnectMongo from "@/connection/Connection";
import Topicmodel from "@/connection/models/Models";

ConnectMongo();

export async function PATCH(req, context){
    try{
        const id = await context.params.id;
        const update = await req.json();
        const res = await Topicmodel.findByIdAndUpdate(id, update);
        return NextResponse.json({status: 200, msg: "Your data has been updated", data: res})
    }
    catch(error){
        return NextResponse.json({status: 500}, {msg: "Your data hasn't Updated !"});
    }
}


export async function DELETE(req, context){
    try{
        const id = await context.params.id;
        const res = await Topicmodel.findByIdAndDelete(id); 
    }
    catch(error){
        return NextResponse.json({status: 500}, {msg: "Your data has not deleted"});
    }
}