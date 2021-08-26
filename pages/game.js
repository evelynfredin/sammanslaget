import Head from "next/head";
import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
    loaderUrl: "./Build/Builds.loader.js",
    dataUrl: "./Build/Builds.data",
    frameworkUrl: "./Build/Builds.framework.js",
    codeUrl: "./Build/Builds.wasm",
});

export default function Game() {
    return (
        <>
            <Head>
                <title>Spela | Home Is Where The Heart Is</title>
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <div className="relative">
                <p className="absolute top-0 right-0 p-5">Go back home</p>
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
