"use client";
import Markdown, { RuleType } from "markdown-to-jsx";
import { CopyBlock, dracula } from "react-code-blocks";
import SyntaxHighlighter from "react-syntax-highlighter";

import { GET } from "@/lib/http";
import { cn, isDark } from "@/lib/utils";
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
                    width: 500,
                    height: 500,
                    className: "md:w-1/2 w-full rounded-lg transition",
                },
            },

            code: {
                props: {
                    className: cn("bg-gray-300 rounded text-sm px-1", {
                        "bg-gray-700 text-green-500": isDark(),
                    }),
                },
            },

            ul: {
                props: {
                    className: "pl-8",
                },
            },

            li: {
                props: {
                    className: "list-disc",
                    key: "0000",
                },
            },
        },

        renderRule(next, node) {
            if (node.type === RuleType.codeBlock) {
                return (
                    <CopyBlock
                        text={node.text}
                        language={node.lang}
                        wrapLines={true}
                        showLineNumbers={true}
                        theme={dracula}
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
                className="leading-8 flex flex-col gap-6"
            >
                {post?.content}
            </Markdown>
        </div>
    );
};

export default TestPage;
