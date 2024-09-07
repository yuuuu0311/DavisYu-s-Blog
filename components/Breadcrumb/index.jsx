"use client";

// hooks
import { Fragment } from "react";
import { usePathname } from "next/navigation";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const CustomBreadcrumb = () => {
    const path = usePathname();
    const pathArr = path.split("/").filter((path) => path);

    return (
        <Breadcrumb className="mt-4">
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                {pathArr.map((path, index) => (
                    <Fragment key={path + index}>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href={`/${path}`}>
                                {path}
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </Fragment>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    );
};

export default CustomBreadcrumb;
