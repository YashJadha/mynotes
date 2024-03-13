import { RegModel } from "@/connection/models/regmodal";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';

export async function POST(req) {
    try {
        const { email, password } = await req.json();
        const user = await RegModel.findOne({ "email": email });

        if (user) {
            const checkpassword = await bcrypt.compare(password, user.password);
            if (checkpassword) {
                return NextResponse.json({ user }, { status: 200 }, { msg: "Your data has posted !" });
            }
        }
        else {
            console.log("data can't find ");
            return null;
        }

    }
    catch (error) {
        return NextResponse.json({ status: 500 }, { msg: "Your data not posted !" }, { error });
    }
}