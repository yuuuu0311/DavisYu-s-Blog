import Link from "next/link";
import { Badge } from "@/components/ui/badge";

import { getSortedPostsData } from "@/lib/getSortedPostsData.js";

const PostListPage = () => {
    const postData = getSortedPostsData();

    return (
        <div>
            <ul className="flex flex-col gap-6 mt-8">
                {postData.map((post, index) => (
                    <li
                        key={post.id + index}
                        className="hover:text-green-500 transition"
                    >
                        <div className="md:flex gap-4 justify-between">
                            <Link href={`/post/${post.id}`}>
                                <p className="text-lg">{post.title}</p>
                            </Link>
                            <div className="flex gap-2">
                                {post.tag?.map((tag) => (
                                    <Badge variant="secondary" key={tag}>
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        <span className="text-xs opacity-40">{post.date}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostListPage;
