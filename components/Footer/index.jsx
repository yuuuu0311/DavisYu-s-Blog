import Link from "next/link";

import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="md:p-8 p-4 border-t-[1px] border-solid border-zinc-200 flex justify-between md:items-center">
            <span className="text-sm">Copyright © {year} Davis Yu.</span>
            <div>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 text-lg">
                    <p className="text-sm hidden md:block">Contact me via</p>
                    <div className="flex gap-4">
                        <Link href="https://github.com/yuuuu0311">
                            <FaGithub />
                        </Link>
                        <Link href="https://www.linkedin.com/in/yuuu0311/">
                            <FaLinkedin />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
