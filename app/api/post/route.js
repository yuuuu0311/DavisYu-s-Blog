import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { NextResponse } from "next/server";

export const GET = async (req) => {
    // Get post id from request
    const { searchParams } = new URL(req.url);
    const postID = searchParams.get("postID");

    // Get post file
    const postsDirectory = path.join(process.cwd(), `posts`);
    const postPath = path.join(postsDirectory, `${postID}.md`);

    const postData = fs.readFileSync(postPath, "utf8");
    const matterResult = matter(postData);

    return NextResponse.json({
        message: "hello",
        ...matterResult.data,
    });
};
