import { RegModel} from "@/connection/models/regmodal";
import ConnectMongo from "@/connection/Connection";
import { NextResponse } from "next/server";

export async function POST(req){
    try{
        const {name, email, password} = await req.json();
        const res = await RegModel.create({name, email, password});
        console.log(res);
        return NextResponse.json({status: 200}, {msg: "Your data is posted !"}, {data: res});
    }
    catch(error){
        return NextResponse.json({status: 500}, {msg: "Your data cannot posted !"}, {error})
    }
}

export async function GET(req){
    try{
        const data = await RegModel.find();
        return NextResponse.json({status: 200}, {msg: "your data"}, {data});
    }
    catch(error){
        return NextResponse.json({status: 500}, {msg: "Your data cannot find !"}, {error})
    }
}

export async function DELETE(req){
    try{
        const del = await RegModel.deleteMany();
        if(del){
            return NextResponse.json({status: 200}, {msg: "Your data is deleted !"});
        }
    }
    catch(error){
        return NextResponse.json({status: 500}, {msg: "Your data can't deleted"})
    }
}