"use client";

import { useParams } from "next/navigation";

import { GET } from "@/lib/http";
import { useEffect, useState } from "react";

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

    return <div>{post?.title}</div>;
};

export default TestPage;
