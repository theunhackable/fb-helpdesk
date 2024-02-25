import { User as UserType } from "@/types";
import { userSchema } from "@/validation/user";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import User from "@/models/user";
import { connectMongoose, disconnectMongoose } from "@/lib/mongoose-helper";
import bcryptjs from 'bcryptjs'

export async function GET() {
  redirect("/signup");
}

export async function POST(req: NextRequest) {
  try {
    await connectMongoose();

    const data: UserType = await req.json();

    const validatedBody = userSchema.parse(data);

    const user = await User.findOne({ email: validatedBody.email });
    
    // if user exist its a conflict
    if (user) {
      return NextResponse.json(
        { message: "User already exist" },
        { status: 409 }
      );
    }
    // if user do not exists create one
    // salt the password
    const genSalt = await bcryptjs.genSalt(10)
    const hashedPassword = await bcryptjs.hash(validatedBody.password, genSalt)
    const newUser = new User({...validatedBody, password: hashedPassword});
    await newUser.save();

    return NextResponse.json(
      { message: "New user created successfully." },
      { status: 201 }
    );
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ message: error.errors }, { status: 400 });
    } else {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  } finally {
    try {

      await disconnectMongoose();
    } catch(e) {
      console.log(e)
      
    }
  }
}
