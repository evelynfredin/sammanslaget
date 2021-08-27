import Link from "next/link";
import Heading from "../components/Heading";
import Image from "next/image";
import Head from "next/head";
import styles from "../styles/utilities.module.css";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <>
            <Head>
                <title>Vrå</title>
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <div className={`${styles.bgcover} bg-hero h-screen w-screen`}>
                <main className="mx-auto container pb-10 px-5 md:px-0">
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.8 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <Heading title="Vrå" />
                        <p className="my-6 w-full container lg:w-[730px] mt-7 text-gray-50 text-lg">
                            Det sägs att hemmet är där hjärtat finns. En liten
                            tröst för den som förlorat all trygghet som ett hem
                            innebär. I vår interaktiva upplevelse ställs du
                            inför vissa av de frågor och val som många personer
                            kämpar med varje dag. Har du det som krävs för att
                            klara dig?
                        </p>
                        <Link href="/about">
                            <div>
                                <a className="transition duration-500 ease-in-out mt-4 hover:underline text-gray-200 text-2xl font-bold inline-flex space-x-2 items-center transform hover:translate-x-4 cursor-pointer">
                                    <p>Mer om projektet</p>
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
                    </motion.div>
                    <div className="flex justify-center items-center">
                        <Link href="/game">
                            <motion.div
                                initial={{ opacity: 0 }}
                                transition={{ duration: 0.8 }}
                                animate={{ opacity: 1 }}
                                className="mt-5 inline-flex justify-center relative h-auto items-center cursor-pointer transition duration-500 ease-in-out transform hover:translate-y-4"
                            >
                                <Image
                                    priority
                                    src="/heart.svg"
                                    height={174}
                                    width={174}
                                    alt="Heart"
                                    aria-label="Starta Spelet"
                                />
                                <p className="absolute text-green-50 text-2xl">
                                    Starta
                                    <br /> Spelet
                                </p>
                            </motion.div>
                        </Link>
                    </div>
                </main>
            </div>
        </>
    );
}
