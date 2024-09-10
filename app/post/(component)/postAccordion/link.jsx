"use client";

import Link from "next/link";
import { AccordionContent } from "@/components/ui/accordion";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

const LinkItem = ({ children, href }) => {
    const path = usePathname();

    const activeStyle = cn({
        "text-green-500": path === href,
    });

    return (
        <AccordionContent>
            <Link href={href} className={activeStyle}>
                {children}
            </Link>
        </AccordionContent>
    );
};

export default LinkItem;
