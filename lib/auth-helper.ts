import { NextRequest } from "next/server";
import jwt  from "jsonwebtoken";
import { User } from "@/types";
export async function getTokenData(req: NextRequest) {
    const jwtSecret = process.env.JWT_SECRET!
    try {
        const token = req.cookies.get('token')?.value
        if(token) {
            const data = jwt.verify(token, jwtSecret) as User
            return data;
        }
    } catch (error: any) {
        throw new Error(error.message)
    }
}

export async function createToken(user: User) {

    const jwtSecret = process.env.JWT_SECRET as string;
    const token = jwt.sign(
      { id: user._id, name: user.name, email: user.email, code: user.code },
      jwtSecret,
      { expiresIn: "1d" }
    );
    return token
}