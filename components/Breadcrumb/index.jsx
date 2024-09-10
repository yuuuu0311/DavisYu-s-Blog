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

// utils
import { cn } from "@/lib/utils";

const CustomBreadcrumb = ({ ...res }) => {
    const path = usePathname();
    const pathArr = path.split("/").filter((path) => path);

    const BreadcrumbStyle = cn(`mt-4 ${res.className}`);

    return (
        pathArr.length !== 0 && (
            <Breadcrumb className={BreadcrumbStyle}>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">
                            <FaHome />
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    {pathArr.map((path, index) => (
                        <Fragment key={path + index}>
                            <BreadcrumbSeparator />

                            {index !== pathArr.length - 1 ? (
                                <BreadcrumbItem>
                                    <BreadcrumbLink href={`/${path}`}>
                                        {decodeURIComponent(path)}
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                            ) : (
                                <BreadcrumbItem className="text-blue-500">
                                    {decodeURIComponent(path)}
                                </BreadcrumbItem>
                            )}
                        </Fragment>
                    ))}
                </BreadcrumbList>
            </Breadcrumb>
        )
    );
};

export default CustomBreadcrumb;
