"use client";
import Markdown, { RuleType } from "markdown-to-jsx";
import { CopyBlock, dracula } from "react-code-blocks";
import { overrides } from "post/[id]/overrides";

import { GET } from "@/lib/http";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

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
            ...overrides,
        },
        renderRule(next, node) {
            if (node.type === RuleType.codeBlock) {
                return (
                    <CopyBlock
                        text={node.text}
                        language={node.lang}
                        showLineNumbers={true}
                        theme={dracula}
                        className="!overflow-auto !max-w-full"
                        codeBlock
                    />
                );
            }

            return next();
        },
    };

    return (
        <div>
            <div className="flex flex-col gap-4 md:py-12 py-8">
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
                className="leading-8 flex flex-col md:gap-4 gap-8"
            >
                {post?.content}
            </Markdown>
        </div>
    );
};

export default TestPage;
