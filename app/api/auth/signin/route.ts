import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import { User as UserType } from "@/types";
import { emailSchema, passwordSchema } from "@/validation/user";
import { z } from "zod";
import User from "@/models/user";
import bcryptjs from "bcryptjs";
import { connectMongoose, disconnectMongoose } from "@/lib/mongoose-helper";
import jwt from "jsonwebtoken";
export async function GET() {
  redirect("/signin");
}

export async function POST(req: NextRequest) {
  try {
    await connectMongoose();

    const data: Partial<UserType> = await req.json();

    const validatedEmail = emailSchema.parse(data.email);

    const user = await User.findOne({ email: validatedEmail });

    // if user not found
    if (!user)
      return NextResponse.json({ message: "User not found" }, { status: 404 });

    const validatedPassword = passwordSchema.parse(data.password);
    const matched = await bcryptjs.compare(validatedPassword, user.password);
    if (!matched)
      return NextResponse.json(
        { error: "Incorrect email or password." },
        { status: 401 }
      );
    // if password matched sign a jwt token and send it to the user
    const jwtSecret = process.env.JWT_SECRET as string;
    const token = jwt.sign(
      { id: user._id, name: user.name, email: user.email, code: user.code },
      jwtSecret,
      { expiresIn: "1d" }
    );
    return NextResponse.json({
      message: "Logged in successfully.",
      id: user._id,
      name: user.name,
      email: user.email,
      code: user.code,
      token,
    });
  } catch (error) {
    console.log(error);
    if (error instanceof z.ZodError)
      return NextResponse.json({ error: error.errors }, { status: 400 });
    else return NextResponse.json({ error: "Internal error" }, { status: 500 });
  } finally {
    await disconnectMongoose();
  }
}
