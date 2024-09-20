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
            className="w-56 max-h-full overflow-auto md:py-6 md:block hidden"
            defaultValue="javascript0"
        >
            {postData.map((cate, index) => {
                return (
                    <AccordionItem
                        value={cate.catName + index}
                        key={cate.catName + index}
                        className="data-[state=closed]:text-zinc-400 transition px-4"
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
