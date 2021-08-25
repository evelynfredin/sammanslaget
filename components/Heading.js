import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

const Heading = (props) => {
    return (
        <div className="flex flex-col mx-5 md:mx-16">
            <div className="mt-16">
                <h1 className="font-black text-5xl text-gray-50 bg-rdorange px-5 inline">
                    {props.title}
                </h1>
            </div>
            <p className="w-full md:w-[630px] mt-7 text-gray-50 text-lg">
                {props.description}
            </p>
            <Link href={props?.page}>
                <div>
                    <a className="transition duration-500 ease-in-out mt-4 hover:underline text-gray-200 text-2xl font-bold inline-flex space-x-2 items-center transform hover:translate-x-4 cursor-pointer">
                        <p>{props?.text}</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </a>
                </div>
            </Link>
            `
        </div>
    );
};

Heading.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    page: PropTypes.string,
    text: PropTypes.string,
};

export default Heading;
