import Image from "next/image";
import { cn, isDark } from "@/lib/utils";
// import { nanoid } from "nanoid";

import TestButton from "./(component)/next.js-env-variable/TestButton";

import ZoomImg from "@/components/ZoomImg";

export const overrides = {
    h1: {
        props: {
            className: "text-3xl font-bold mt-4",
        },
    },
    h2: {
        props: {
            className: "text-2xl font-bold mt-4",
        },
    },
    h3: {
        props: {
            className: "text-xl font-bold mt-4",
        },
    },
    h4: {
        props: {
            className: "text-lg font-bold mt-4",
        },
    },
    img: {
        component: ZoomImg,
        props: {
            width: 500,
            height: 500,
            className: "md:w-1/2 w-full",
        },
    },

    a: {
        props: {
            className: "text-green-500 mx-1",
        },
    },

    code: {
        props: {
            className: cn("bg-gray-300 rounded text-sm px-1 mx-1", {
                "bg-gray-700 text-green-500": isDark(),
            }),
        },
    },

    ul: {
        props: {
            className: "pl-8",
        },
    },

    ol: {
        props: {
            className: "list-decimal pl-4",
        },
    },

    TestButton: {
        component: TestButton,
    },
};
