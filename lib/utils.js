import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs) => {
    return twMerge(clsx(inputs));
};

export const isDark = () => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
};
