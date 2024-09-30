import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import LinkItem from "post/(component)/postAccordion/link";

import { postData } from "post/data.js";

// hooks
// import useCountStore from "@/app/hooks/useCountStore";

const PostAccordion = () => {
    // const { defaultValue, increasePopulation } = useCountStore();

    return (
        <Accordion
            type="single"
            collapsible
            className="w-64 max-h-full overflow-auto md:block hidden pl-12 py-8"
            defaultValue="javascript0"
        >
            {postData.map((cate, index) => {
                return (
                    <AccordionItem
                        value={cate.catName + index}
                        key={cate.catName + index}
                        className="data-[state=closed]:text-zinc-400 transition"
                    >
                        <AccordionTrigger>{cate.catName}</AccordionTrigger>
                        <div>
                            {cate.items.map((item, index) => {
                                return (
                                    <LinkItem
                                        key={item.label + index}
                                        href={item.path}
                                    >
                                        {item.label}
                                    </LinkItem>
                                );
                            })}
                        </div>
                    </AccordionItem>
                );
            })}
        </Accordion>
    );
};

export default PostAccordion;
