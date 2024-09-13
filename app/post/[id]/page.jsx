"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const TestPage = () => {
    const { id: postID } = useParams();
    const [post, setPost] = useState("null");

    useEffect(() => {
        fetch(`/api/post?postID=${postID}`)
            .then((response) => response.json())
            .then((result) => console.log(result))
            .catch((error) => console.log(error));
    }, []);

    return <div>GG</div>;
};

export default TestPage;
