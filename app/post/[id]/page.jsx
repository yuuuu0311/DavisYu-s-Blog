"use client";
import Markdown from "markdown-to-jsx";

import { GET } from "@/lib/http";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import Image from "next/image";
import PageTitle from "post/(component)/pageTitle";
import { Badge } from "@/components/ui/badge";

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

    const mdOptions = {
        overrides: {
            h2: {
                props: {
                    className: "text-lg font-bold",
                },
            },
            img: {
                component: Image,
                props: {
                    className: "w-1/2",
                    width: 500,
                    height: 500,
                },
            },
        },
    };

    return (
        <div>
            <div className="flex flex-col gap-4 pb-12">
                <PageTitle>{post?.title}</PageTitle>
                <p className="text-xs ">
                    {post?.minsToRead && `${post?.minsToRead} min read · `}
                    發佈於 {post?.date}
                </p>
                <div className="flex gap-4">
                    {post?.tag?.map((post) => (
                        <Badge variant="secondary" key={post}>
                            {post}
                        </Badge>
                    ))}
                </div>
            </div>

            <Markdown
                options={mdOptions}
                className="leading-8 flex flex-col gap-6"
            >
                {post?.content}
            </Markdown>
        </div>
    );
};

export default TestPage;
