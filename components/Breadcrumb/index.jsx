"use client";

import { FaHome } from "react-icons/fa";

// hooks
import { Fragment } from "react";
import { usePathname } from "next/navigation";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const CustomBreadcrumb = () => {
    const path = usePathname();
    const pathArr = path.split("/").filter((path) => path);

    return (
        pathArr.length !== 0 && (
            <Breadcrumb className="mt-4">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">
                            <FaHome />
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    {pathArr.map((path, index) => (
                        <Fragment key={path + index}>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href={`/${path}`}>
                                    {decodeURIComponent(path)}
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </Fragment>
                    ))}
                </BreadcrumbList>
            </Breadcrumb>
        )
    );
};

export default CustomBreadcrumb;
