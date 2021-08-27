import Image from "next/image";
import React from "react";

const Footer = () => {
    return (
        <div className="px-5 md:px-0 mb-10 mt-32 container mx-auto flex justify-between">
            <div>
                <a href="http://yrgo.se">
                    <Image
                        priority
                        src="/yrgo.svg"
                        height={24}
                        width={97}
                        alt="Logo"
                        aria-label="Visit Yrgo"
                        className="hover:opacity-80"
                    />
                </a>
                <p className="text-sm text-gray-400">Copyright © 2021</p>
            </div>
            <div>
                <a href="https://raddningsmissionen.se/">
                    <Image
                        priority
                        src="/rdm.svg"
                        height={24}
                        width={167}
                        alt="Räddningsmissionen"
                        aria-label="Visit Räddningsmissionen"
                        className="hover:opacity-80"
                    />
                </a>
            </div>
        </div>
    );
};

export default Footer;
