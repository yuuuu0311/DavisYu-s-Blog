import PageTitle from "post/(component)/pageTitle";

export function useMDXComponents(components) {
    return {
        h1: ({ children }) => <PageTitle>{children}</PageTitle>,
        ...components,
    };
}
