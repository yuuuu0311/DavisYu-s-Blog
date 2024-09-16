import Link from "next/link";

import { getSortedPostsData } from "@/lib/getSortedPostsData.js";

const PostListPage = () => {
    const postData = getSortedPostsData();

    return (
        <div>
            <h3 className="mb-4">這邊放了所有的文章</h3>

            <ul className="flex flex-col gap-2">
                {postData.map((post, index) => (
                    <li key={post.id + index}>
                        <Link href={`/post/${post.id}`}>
                            <p className="text-lg">{post.title}</p>
                            <span className="text-xs">{post.date}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostListPage;
