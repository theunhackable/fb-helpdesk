import { getTokenData } from "@/lib/auth-helper";
import { User } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    console.log('hiii')
    try {
        const data = await getTokenData(req) ;
        console.log(data)
        return NextResponse.json({message: 'Success', user: {... data}})
    } catch(error: any) {
        return NextResponse.json({message: error.message, user: null}, {status: 400})
    }
    

}