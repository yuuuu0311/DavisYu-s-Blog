import Link from "next/link";

import { Button } from "@/components/ui/button";

const Home = () => {
    return (
        <div>
            <Link href="/about">
                <Button>GG</Button>
            </Link>
            <Link href="/post">
                <Button>visit post</Button>
            </Link>
        </div>
    );
};

export default Home;
