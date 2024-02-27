import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
    console.log('got it')
    try {
        const res =  NextResponse.json({message: 'Logged out successfully.'})
        res.cookies.set('token', '', {httpOnly: true, expires: new Date(0)})
        return res;
    } catch(error: any) {
        return NextResponse.json({message: error.message}, {status: 500})
    }
}