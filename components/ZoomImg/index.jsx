import Image from "next/image";

import { cn } from "@/lib/utils";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const ZoomImg = ({ src, alt, width, height, className }) => {
    const triggerStyle = cn(className, "rounded-lg overflow-hidden");

    return (
        <Dialog>
            <DialogTrigger className={triggerStyle}>
                <Image src={src} alt={alt} width={width} height={height} />
            </DialogTrigger>
            <DialogContent className="p-0 border-none md:max-w-[65vw]">
                <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    className="w-full rounded-lg"
                />
            </DialogContent>
        </Dialog>
    );
};

export default ZoomImg;
