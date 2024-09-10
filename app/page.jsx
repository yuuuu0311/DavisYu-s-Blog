import Link from "next/link";

import { Button } from "@/components/ui/button";

const Home = () => {
    return (
        <div>
            <Link href="/about">
                <Button>about</Button>
            </Link>
            <Link href="/post">
                <Button>post</Button>
            </Link>
        </div>
    );
};

export default Home;
