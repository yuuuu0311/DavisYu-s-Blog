import Link from "next/link";
import { Button } from "@/components/ui/button";

const Header = () => {
    return (
        <header className="md:py-6 md:px-8 py-2 px-4 flex items-baseline gap-12 bg-[--background] border-b-[1px] border-solid border-zinc-200">
            <h3 className="text-lg font-bold animate-fade-up animate-once">
                <Link href="/">Davis Yu</Link>
            </h3>
            <ul className="flex gap-4">
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
