import Image from "next/image";
import React from "react";

const Footer = () => {
    return (
        <div className="px-5 md:px-0 mb-10 mt-36 items-center container mx-auto flex md:justify-between md:items-center flex-col md:flex-row">
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
