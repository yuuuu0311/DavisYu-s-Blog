import Link from "next/link";
import { Button } from "@/components/ui/button";

const Header = () => {
    return (
        <header className="sticky top-0 py-6 flex items-baseline gap-12 bg-white border-b-[1px] border-solid border-zinc-200">
            <h3 className="text-lg font-bold animate-fade-up animate-once">
                <Link href="/">Davis Yu</Link>
            </h3>
            <ul className="flex gap-4">
                <li>
                    <Link href="/post">post</Link>
                </li>
                <li>
                    <Link href="/post">post</Link>
                </li>
                <li>
                    <Link href="/post">post</Link>
                </li>
                <li>
                    <Link href="/post">post</Link>
                </li>
                <li>
                    <Link href="/post">post</Link>
                </li>
            </ul>
            {/* <Drawer>
                <DrawerTrigger>Open</DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                        <DrawerDescription>
                            This action cannot be undone.
                        </DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter>
                        <Button>Submit</Button>
                        <DrawerClose>
                            <Button variant="outline">Cancel</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer> */}
        </header>
    );
};

export default Header;
