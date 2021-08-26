import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import TeamMember from "../components/TeamMember";
import styles from "../styles/utilities.module.css";

const about = () => {
    return (
        <>
            <Head>
                <title>Projektet | Home Is Where The Heart Is</title>
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <div className={`${styles.bgcover} bg-about w-screen`}>
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mx-auto container pb-10 px-5 md:px-0"
                >
                    <Link href="/">
                        <div>
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
                    <Heading title="Projektet:" />
                    <div className="my-6 w-full container lg:w-[930px] mt-7 text-gray-50 text-lg">
                        <p>
                            Spelet vi spelar och Livet vi lever har många
                            likheter. Vinnare och förlorare. En början och ett
                            slut. Vi har tagit osäkerheten, stressen, de
                            peppande budskapen - och gjort bostadsmarknaden till
                            ett spel. Gör dina val och se om du klarar dig. Med
                            dig på resan har du din älskade följeslagare Dante,
                            som erbjuder dig ovillkorlig kärlek.
                        </p>
                        <p className="mt-5">
                            “Kärleken är större - än vad?” var den filosofiska
                            fråga vi ställde oss i utvecklandet av det här
                            projektet. Hur mäter vi kärlek - trygghet -
                            medmänsklighet? Vad är vikten av ett hem och
                            betydelsen av skyddsnäten som omger oss i form av
                            vänskap, familj och relationer. Men också samhället
                            i stort. Denna upplevelse knyter an till en central
                            fråga för Räddningsmissionens arbete. Hjärterum -
                            ett initiativ där privatpersoner och fastighetsägare
                            kan bidra med lediga ytor för att motverka hemlöshet
                            och ge fler en plats att kalla hem. Vi hoppas att du
                            får med dig tanken om vilka alternativ du har om du
                            är eller hamnar i en situation som den berättelse vi
                            ger dig med spelet"
                        </p>
                    </div>
                    <div className="my-6 transition-all duration-500 ease-in-out transform hover:translate-y-2 hover:shadow-none inline-flex">
                        <a
                            href="https://raddningsmissionen.se/hjarterum"
                            className="bg-rdgreen text-gray-50 p-4 rounded-lg shadow-xl hover:bg-[#037b7a]"
                        >
                            Mer om Hjärterum
                        </a>
                    </div>
                </motion.div>
            </div>
            <section className="mx-auto container px-5 md:px-0">
                <div>
                    <h2 className="text-gray-800 font-bold text-3xl mt-20 mb-10">
                        Om oss:
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 gap-y-20">
                        <TeamMember
                            imgSrc="/oliwer.jpg"
                            altText="Oliwer Hägglund, Ux Designer"
                            memberName="Oliwer Hägglund"
                            occupation="Ux Designer"
                            description="Som ux-designer i detta projektet ansvarade jag för att idégenereringa samt att överse designprocessen och agera projektledare. Utöver det bistå i att säkerställa användarvänligheten och upplevelsen i projektet."
                            email="oliwer.123435@gmail.com"
                        />
                        <TeamMember
                            imgSrc="/ida.jpg"
                            altText="Ida Mikko, Manusförfattare"
                            memberName="Ida Mikko"
                            occupation="Manusförfattare"
                            description="Min roll som manusförfattare har varit att strukturera och skriva berättelsens utformning. I nära samarbete med vår game artist och programmerare har jag jobbat för att få en fint sammanhållen tonalitet och funktion."
                            email="mikko.ida@gmail.com"
                            portfolio="https://www.linkedin.com/in/ida-mikko-8653a3153"
                        />
                        <TeamMember
                            imgSrc="/adam.jpg"
                            altText="Adam Forsell, Game Programmer"
                            memberName="Adam Forsell"
                            occupation="Game Programmer"
                            email="adamforsell2@hotmail.com"
                            portfolio="https://www.linkedin.com/in/adam-forsell-3037b0a3"
                        />
                        <TeamMember
                            imgSrc="/ev.jpeg"
                            altText="Evelyn Fredin, Webbutvecklare"
                            memberName="Evelyn Fredin"
                            occupation="Webbutvecklare"
                            description="Tillsammans med mitt team bidrog jag till den konceptuella idén. Designen, utseendet och känslan på webbplatsen samt de tekniska beslut som låg bakom skapandet och deployen av webbplatsen."
                            email="evelynfredin@gmail.com"
                            portfolio="https://evelyn.codes"
                        />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default about;
