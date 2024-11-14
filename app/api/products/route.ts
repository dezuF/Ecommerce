import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

import { connectToDB } from "@/lib/mongoDB";

export const POST = async (req: NextRequest) => {
  try{
    const {userId} = auth()

    if (!userId){
      return new NextResponse("Unauthorized", {status:401});
    }
    await connectToDB
  } catch (err) {
    console.log("[products_POST]",err);
    return new NextResponse("Internal Error", { status:500});
  }
}