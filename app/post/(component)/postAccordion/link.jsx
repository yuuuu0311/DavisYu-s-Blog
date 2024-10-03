"use client";

import Link from "next/link";
import { AccordionContent } from "@/components/ui/accordion";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

const LinkItem = ({ children, href }) => {
    const path = usePathname();

    const activeStyle = cn("transition bg-transparent", {
        // "bg-zinc-200 ": path === href,
    });

    return (
        <AccordionContent className={activeStyle}>
            <Link href={href}>{children}</Link>
        </AccordionContent>
    );
};

export default LinkItem;
