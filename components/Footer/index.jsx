import Link from "next/link";

import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="p-8 border-t-[1px] border-solid border-zinc-200 flex justify-between items-center max-w-screen-xl">
            <div>
                <div className="flex items-center gap-4 text-lg">
                    <p className="text-sm">Contact me via</p>
                    <Link href="https://github.com/yuuuu0311">
                        <FaGithub />
                    </Link>
                    <Link href="https://www.linkedin.com/in/yuuu0311/">
                        <FaLinkedin />
                    </Link>
                </div>
            </div>
            <span className="text-sm">Copyright © {year} Davis Yu.</span>
        </footer>
    );
};

export default Footer;
