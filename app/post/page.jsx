import Link from "next/link";

const PostListPage = () => {
    return (
        <div>
            post page:
            <Link href="/post/GG">GG</Link>
            <Link href="/post/你說什麼">你說什麼</Link>
        </div>
    );
};

export default PostListPage;
