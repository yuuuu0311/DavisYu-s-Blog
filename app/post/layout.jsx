// components
import CustomBreadcrumb from "@/components/Breadcrumb";
import PostAccordion from "post/(component)/postAccordion";

export default function PostPageLayout({ children }) {
    return (
        <div className="w-full gap-12 flex">
            <PostAccordion />
            <div className="flex-1 overflow-auto">
                <CustomBreadcrumb />
                <main className="mt-6">{children}</main>
            </div>
        </div>
    );
}
