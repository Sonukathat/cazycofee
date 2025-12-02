import { connectDB } from "@/lib/db";
import User from "@/lib/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req) {
  try {
    await connectDB();

    const { email, password } = await req.json();

    
    if (!email || !password) {
      return Response.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    
    const user = await User.findOne({ email });
    if (!user) {
      return Response.json(
        { error: "User not found" },
        { status: 400 }
      );
    }

    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return Response.json(
        { error: "Wrong password" },
        { status: 400 }
      );
    }


    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET
    );

    return Response.json(
      { message: "Login Successful", token, user },
      { status: 200 }
    );
  } catch (error) {
    console.error("Login Error:", error);

    return Response.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
