import Link from "next/link";
import Image from "next/image";

import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { getSortedPostsData } from "@/lib/getSortedPostsData.js";

const Home = () => {
    // display first three article
    const postData = getSortedPostsData();
    const latestPost = postData.slice(0, 4);

    return (
        <div className="md:p-12 p-6 w-full overflow-auto">
            <section className="flex flex-col gap-6">
                <h3 className="text-2xl font-bold">
                    最新文章<span className="ml-4">👀</span>
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-8">
                    {latestPost.map((post) => (
                        <Link
                            href={`/post/${post.id}`}
                            className="h-full transition inline-block group"
                        >
                            <Card className="flex flex-col justify-between h-full">
                                <CardHeader>
                                    <div className="overflow-hidden w-full rounded-lg mb-2">
                                        <Image
                                            src="/images/phil-lee2.webp"
                                            width={100}
                                            height={100}
                                            className="w-full group-hover:scale-110 group-hover:brightness-110 transition duration-500"
                                        ></Image>
                                    </div>
                                    <CardTitle className="text-green-500">
                                        {post.title}
                                    </CardTitle>
                                    <CardDescription className="text-ellipsis line-clamp-2">
                                        {post.desc}
                                    </CardDescription>
                                </CardHeader>
                                <CardFooter className="opacity-40 text-sm justify-end">
                                    <p>{`${post.minsToRead} min read · ${post.date}`}</p>
                                </CardFooter>
                            </Card>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
