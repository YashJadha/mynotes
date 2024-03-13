import ConnectMongo from "@/connection/Connection";
import { RegModel } from "@/connection/models/regmodal";
import { NextResponse } from "next/server";
ConnectMongo();

export async function PATCH(req, context){
    try{
        const id = await context.params.id;
        const update = await req.json();
        const res = RegModel.findByIdAndUpdate(id, update);
        if(res === true){
            return NextResponse.json({status: 200}, {msg: "Your data has Updated !"}, {data: res});
        }
    }
    catch(error){
        return NextResponse.json({status: 500}, {msg: "Your data can't updated :-("});
    }
}

export async function GET(req, context){
    try{
        const id = await context.params.id;
        const res = RegModel.findById(id);
        if(res){
            return NextResponse.json({status: 200}, {msg: "Your data "}, {data: res})
        }
    }
    catch(error){
        return NextResponse.json({status: 500}, {msg: "Your data can't updated :-("});
    }
}

export async function DELETE(req, context){
    try{
        const id = await context.parmas.id;
        const res = await RegModel.findByIdAndDelete(id);
        if(res){
            return NextResponse.json({status: 200}, {msg: "Your data has been deletd "})
        }
    }
    catch(error){
        return NextResponse.json({status: 500}, {msg: "Your data can't deleted :-("});
    }
}