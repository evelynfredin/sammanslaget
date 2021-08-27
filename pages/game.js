import React, { useEffect, useState } from "react";
import Head from "next/head";
import Unity, { UnityContext } from "react-unity-webgl";
import Loading from "../components/Loading";
import Link from "next/link";
import styles from "../styles/utilities.module.css";

const unityContext = new UnityContext({
    loaderUrl: "./Build/Builds.loader.js",
    dataUrl: "./Build/Builds.data",
    frameworkUrl: "./Build/Builds.framework.js",
    codeUrl: "./Build/Builds.wasm",
});

export default function Game() {
    const [loading, setLoading] = useState();
    function handleOnClickFullscreen() {
        unityContext.setFullscreen(true);
    }

    useEffect(() => {
        setLoading(true);
    }, []);
    return (
        <>
            <Head>
                <title>Spela | Vrå</title>
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <div className="relative">
                <Link href="/">
                    <div>
                        <a className="absolute top-0 left-5 p-3 transition duration-500 ease-in-out mt-4 hover:underline text-gray-200 text-2xl font-bold inline-flex space-x-2 items-center transform hover:translate-x-4 cursor-pointer">
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
                {loading && <Loading setLoading={setLoading} />}

                <div
                    className={`${styles.bgcover} bg-hero h-screen mx-auto flex justify-center items-center`}
                >
                    <div className="flex-col w-full h-auto md:h-[80%] md:w-[80%] lg:h-[60%] lg:w-[60%] ">
                        <Unity
                            className="mx-auto w-full h-full"
                            unityContext={unityContext}
                        />
                        <button
                            aria-label="Full Screen"
                            title="Full Screen"
                            onClick={handleOnClickFullscreen}
                            className="bg-rdgreen p-1 rounded-md text-gray-50 hover:bg-[#037b7a] mt-4"
                        >
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
                                    d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
