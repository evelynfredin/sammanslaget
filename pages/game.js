import React, { useEffect, useState } from "react";
import Head from "next/head";
import Unity, { UnityContext } from "react-unity-webgl";
import Loading from "../components/Loading";
import Link from "next/link";

const unityContext = new UnityContext({
    loaderUrl: "./Build/Builds.loader.js",
    dataUrl: "./Build/Builds.data",
    frameworkUrl: "./Build/Builds.framework.js",
    codeUrl: "./Build/Builds.wasm",
});

export default function Game() {
    const [loading, setLoading] = useState();

    useEffect(() => {
        setLoading(true);
    }, []);
    return (
        <>
            <Head>
                <title>Spela | Home Is Where The Heart Is</title>
                <link rel="icon" href="/favicon.svg" />
            </Head>
            {loading && <Loading setLoading={setLoading} />}
            <div className="relative">
                <Link href="/">
                    <p className="absolute top-0 left-0 bg-white bg-opacity-5 text-white cursor-pointer p-3">
                        Tillbaka
                    </p>
                </Link>
                <div>
                    <Unity
                        className="h-screen w-screen"
                        unityContext={unityContext}
                    />
                </div>
            </div>
        </>
    );
}
