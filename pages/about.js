import Link from "next/link";
import React from "react";
import Heading from "../components/Heading";

const about = () => {
    return (
        <>
            <div className="bg-about w-screen">
                <div className="pb-16">
                    <Link href="/">
                        <div className="mx-5 md:mx-16">
                            <a className="transition duration-500 ease-in-out mt-4 hover:underline text-gray-200 text-2xl font-bold inline-flex space-x-2 items-center transform hover:translate-x-4 cursor-pointer">
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
                                        d="M7 16l-4-4m0 0l4-4m-4 4h18"
                                    />
                                </svg>
                                <p>Tillbaka</p>
                            </a>
                        </div>
                    </Link>
                    <Heading
                        title="Projektet:"
                        description="Syftet med vår upplevelse är att knyta an till Räddningsmissionens arbete med hjärterum, ett intiativ som tack vare privatpersoner och fastighetsägares lediga ytor arbetar för att motverka hemlöshet och ge fler en plats att kalla hem."
                    />
                    <div className="mx-5 md:mx-16 my-6 transition-all duration-500 ease-in-out transform hover:translate-y-2 hover:shadow-none inline-flex">
                        <a
                            href="#"
                            className="bg-rdgreen text-gray-50 p-4 rounded-lg shadow-xl hover:bg-[#037b7a]"
                        >
                            Mer om Hjärterum
                        </a>
                    </div>
                </div>
            </div>
            <section className="mx-5 md:mx-16 my-10">
                <h2 className="text-gray-800 font-bold text-3xl">Om oss:</h2>
            </section>
        </>
    );
};

export default about;
