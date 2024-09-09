"use client";

import { usePathname } from "next/navigation";

const PostPage = () => {
    const path = usePathname();

    return <div>{path}</div>;
};

export default PostPage;
