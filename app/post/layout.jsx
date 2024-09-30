// components
import CustomBreadcrumb from "@/components/Breadcrumb";
import PostAccordion from "post/(component)/postAccordion";

export default function PostPageLayout({ children }) {
    return (
        <div className="w-full gap-12 flex">
            <PostAccordion />
            <div className="flex-1 overflow-auto p-6 md:px-12 md:py-8 ">
                <CustomBreadcrumb />
                <main className="md:mb-12 mb-8">{children}</main>
            </div>
        </div>
    );
}
