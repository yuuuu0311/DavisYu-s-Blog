import { NextResponse } from "next/server";

export const GET = async (req) => {
    console.log(req);
    const { searchParams } = new URL(req.url);
    const postID = searchParams.get("postID");

    return NextResponse.json(
        { message: "success", postID: postID },
        { status: 200 }
    );
};
