// components
import CustomBreadcrumb from "@/components/Breadcrumb";
import PostAccordion from "post/(component)/postAccordion";

export default function PostPageLayout({ children }) {
    return (
        <div className="w-full gap-12 flex">
            <PostAccordion />
            <div className="flex-1 overflow-auto md:py-6">
                <CustomBreadcrumb />
                <main className="py-12">{children}</main>
            </div>
        </div>
    );
}
