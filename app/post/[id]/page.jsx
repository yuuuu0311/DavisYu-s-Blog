"use client";
import Markdown from "markdown-to-jsx";

import { GET } from "@/lib/http";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import PageTitle from "post/(component)/pageTitle";

const TestPage = () => {
    const { id: postID } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [post, setPost] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true);
                const result = await GET(`/api/post?postID=${postID}`);
                setPost(result);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        })();
    }, [postID]);

    return (
        <div>
            <div className="flex flex-col gap-4 pb-6">
                <PageTitle>{post?.title}</PageTitle>
                <p className="text-xs ">
                    {post?.minsToRead && `${post?.minsToRead} min read · `}
                    發佈於 {post?.date}
                </p>
            </div>
            <Markdown className="leading-8">{post?.content}</Markdown>
        </div>
    );
};

export default TestPage;
