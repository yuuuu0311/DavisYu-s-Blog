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
            <PageTitle>{post?.title}</PageTitle>
            <Markdown>{post?.content}</Markdown>
        </div>
    );
};

export default TestPage;
